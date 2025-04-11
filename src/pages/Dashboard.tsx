import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
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
                  5,870,001
                </div>
                
                {/* Breakdown of DAO USDC Balance */}
                <div className="border-t border-mtn-light pt-4 mt-2">
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-mtn-darkblue">Held in DAO treasury</span>
                      <span className="text-sm font-medium text-mtn-dark">5,100,000</span>
                    </div>
                    <div className="flex justify-center">
                      <span className="text-mtn-blue">+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-mtn-darkblue">Held in LP</span>
                      <span className="text-sm font-medium text-mtn-dark">770,001</span>
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
                  9,950,000
                </div>
                
                {/* Breakdown of Outstanding Tokens */}
                <div className="border-t border-mtn-light pt-4 mt-2">
                  <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-mtn-darkblue">Total supply</span>
                      <span className="text-sm font-medium text-mtn-dark">11,000,000</span>
                    </div>
                    <div className="flex justify-center">
                      <span className="text-mtn-blue">−</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-mtn-darkblue">Held in LP</span>
                      <span className="text-sm font-medium text-mtn-dark">1,050,000</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
