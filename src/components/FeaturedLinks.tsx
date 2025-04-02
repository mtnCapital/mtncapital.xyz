
import React from 'react';
import { ExternalLink, Newspaper, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Card = ({ 
  title, 
  description, 
  href, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  href: string; 
  icon: React.ElementType;
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-lg border border-mtn-light bg-white hover:shadow-md transition-all hover:border-mtn-blue/30 group"
    >
      <div className="flex items-start">
        <div className="mr-4 p-2 bg-mtn-light rounded-md group-hover:bg-mtn-purple/10 transition-colors">
          <Icon className="h-5 w-5 text-mtn-darkpurple" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-mtn-dark flex items-center">
            {title}
            <ExternalLink className="ml-1.5 h-3.5 w-3.5 text-mtn-blue opacity-70 group-hover:opacity-100" />
          </h3>
          <p className="mt-1 text-mtn-blue">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export function FeaturedLinks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-mtn-dark">
          Learn more about mtnCapital
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card
            title="In the press"
            description="Read about mtnDAO's experimental crypto investment fund in CoinDesk"
            href="https://www.coindesk.com/business/2025/03/07/mtndao-s-experimental-crypto-investment-fund-will-outperform-vcs-claims-founder"
            icon={Newspaper}
          />
          <Card
            title="Verify the token"
            description="View the $MTN token on SolanaFM blockchain explorer"
            href="https://solana.fm/address/mtnc7NNSpAJuvYNmayXU63WhWZGgFzwQ2yeYWqemeta/transactions?cluster=mainnet-alpha"
            icon={BarChart3}
          />
        </div>
      </div>
    </section>
  );
}
