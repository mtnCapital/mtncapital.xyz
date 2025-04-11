import React, { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Connection, PublicKey } from '@solana/web3.js';
import { getAssociatedTokenAddressSync, TOKEN_PROGRAM_ID } from '@solana/spl-token';

// USDC token mint address on Solana mainnet

const Dashboard = () => {
  const [usdcInTreasury, setUsdcInTreasury] = useState<number | null>(null);
  const [usdcInLp, setUsdcInLp] = useState<number | null>(null);
  const [mtnTotalSupply, setMtnTotalSupply] = useState<number | null>(null);
  const [mtnInLp, setMtnInLp] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        setIsLoading(true);
        
        // Connect to Solana mainnet
        const connection = new Connection('https://mainnet.helius-rpc.com/?api-key=5651eea3-b8b8-4385-860e-84ed72f49040', 'confirmed');

        const USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
        const MTN_MINT = new PublicKey('mtnc7NNSpAJuvYNmayXU63WhWZGgFzwQ2yeYWqemeta');
        const MTN_LP_MINT = new PublicKey('6mnrEFQoYs7LujnQfWL3d9reYfEb3N1EN3qLk8dtSWj4');
        const DAO_TREASURY_ADDRESS = new PublicKey('AQfP7s3m2zJh3pE57yHqErZ3uqzSArarr7ZwnhZHFLQE');
        const LP_USDC_ACCOUNT = new PublicKey('CNvBqPRD2D3F9DNhRT1TvSgmjZh33CdMUUzeciPEt92D');
        const LP_MTN_ACCOUNT = new PublicKey('HK4RW9MfA4iSb8EPavXDGmJc1zzrrs7ZtTxdTZaqWMdJ');
        
        // Find the associated token account for the treasury
        const usdcAccount = await connection.getTokenAccountBalance(
          getAssociatedTokenAddressSync(USDC_MINT, DAO_TREASURY_ADDRESS, true),
        );

        const mtnLpAccount = await connection.getTokenAccountBalance(
          getAssociatedTokenAddressSync(MTN_LP_MINT, DAO_TREASURY_ADDRESS, true),
        );

        const mtnLpSupply = await connection.getTokenSupply(MTN_LP_MINT);
        const mtnSupply = await connection.getTokenSupply(MTN_MINT);

        const daoLPShare = mtnLpAccount.value.uiAmount / mtnLpSupply.value.uiAmount;

        const lpUsdcAccount = await connection.getTokenAccountBalance(
          LP_USDC_ACCOUNT,
        );

        const lpMtnAccount = await connection.getTokenAccountBalance(
          LP_MTN_ACCOUNT,
        );

        const usdcHeldInLp = lpUsdcAccount.value.uiAmount * daoLPShare;
        console.log("USDC held in LP:", usdcHeldInLp);

        const mtnHeldInLp = lpMtnAccount.value.uiAmount;
        console.log("MTN held in LP:", mtnHeldInLp);
        
        console.log("MTN total supply:", mtnSupply.value.uiAmount);
        console.log("MTN LP supply:", mtnLpSupply);
        console.log("MTN LP account:", mtnLpAccount);
        console.log("Token accounts:", usdcAccount);
        
        // Set USDC in treasury
        if (usdcAccount) {
          const balance = usdcAccount.value.uiAmount;
          console.log("Found USDC balance:", balance);
          setUsdcInTreasury(balance);
        } else {
          console.log("No USDC account found");
          setUsdcInTreasury(0);
        }
        
        // Set USDC in LP
        setUsdcInLp(usdcHeldInLp || 0);
        
        // Set MTN total supply
        setMtnTotalSupply(mtnSupply.value.uiAmount || 0);
        
        // Set MTN in LP
        setMtnInLp(mtnHeldInLp || 0);
        
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching balances:', err);
        setError('Failed to fetch balances');
        setIsLoading(false);
      }
    };

    fetchBalances();
  }, []);

  // Calculate total USDC balance
  const totalUsdcBalance = (usdcInTreasury || 0) + (usdcInLp || 0);
  
  // Calculate outstanding tokens (total supply minus tokens in LP)
  const outstandingTokens = (mtnTotalSupply || 0) - (mtnInLp || 0);

  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-mtn-dark">
            Dashboard
          </h1>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-mtn-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-mtn-darkblue">DAO USDC Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-mtn-dark">
                  {isLoading ? (
                    <span className="text-mtn-blue/50">Loading...</span>
                  ) : error ? (
                    <span className="text-red-500 text-base">Error loading balance</span>
                  ) : (
                    totalUsdcBalance.toLocaleString(undefined, { maximumFractionDigits: 2 })
                  )}
                </div>
                
                {/* Breakdown of DAO USDC Balance */}
                <div className="border-t border-mtn-light pt-4 mt-2">
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-mtn-darkblue">Held in DAO treasury</span>
                      <span className="text-sm font-medium text-mtn-dark">
                        {isLoading ? (
                          <span className="text-mtn-blue/50">Loading...</span>
                        ) : error ? (
                          <span className="text-red-500 text-xs">Error</span>
                        ) : (
                          usdcInTreasury !== null ? 
                            usdcInTreasury.toLocaleString(undefined, { maximumFractionDigits: 2 }) : 
                            '0'
                        )}
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <span className="text-mtn-blue">+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-mtn-darkblue">Held in LP</span>
                      <span className="text-sm font-medium text-mtn-dark">
                        {isLoading ? (
                          <span className="text-mtn-blue/50">Loading...</span>
                        ) : error ? (
                          <span className="text-red-500 text-xs">Error</span>
                        ) : (
                          usdcInLp !== null ? 
                            usdcInLp.toLocaleString(undefined, { maximumFractionDigits: 2 }) : 
                            '0'
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-mtn-light">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-mtn-darkblue">Outstanding Tokens</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-mtn-dark">
                  {isLoading ? (
                    <span className="text-mtn-blue/50">Loading...</span>
                  ) : error ? (
                    <span className="text-red-500 text-base">Error loading tokens</span>
                  ) : (
                    outstandingTokens.toLocaleString(undefined, { maximumFractionDigits: 0 })
                  )}
                </div>
                
                {/* Breakdown of Outstanding Tokens */}
                <div className="border-t border-mtn-light pt-4 mt-2">
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-mtn-darkblue">Total supply</span>
                      <span className="text-sm font-medium text-mtn-dark">
                        {isLoading ? (
                          <span className="text-mtn-blue/50">Loading...</span>
                        ) : error ? (
                          <span className="text-red-500 text-xs">Error</span>
                        ) : (
                          mtnTotalSupply !== null ? 
                            mtnTotalSupply.toLocaleString(undefined, { maximumFractionDigits: 0 }) : 
                            '0'
                        )}
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <span className="text-mtn-blue">−</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-mtn-darkblue">Held in LP</span>
                      <span className="text-sm font-medium text-mtn-dark">
                        {isLoading ? (
                          <span className="text-mtn-blue/50">Loading...</span>
                        ) : error ? (
                          <span className="text-red-500 text-xs">Error</span>
                        ) : (
                          mtnInLp !== null ? 
                            mtnInLp.toLocaleString(undefined, { maximumFractionDigits: 0 }) : 
                            '0'
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Additional dashboard content can be added here */}
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-10 text-mtn-dark">
            <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
            <p className="text-mtn-blue">
              No recent activity to display. Check back soon for updates on investments and governance decisions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
