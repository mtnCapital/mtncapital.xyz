import React from 'react';
import { LinkButton } from './LinkButton';

export function Hero() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-gradient-to-b from-blue-900/10 via-blue-800/5 to-emerald-900/5">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-mtn-blue to-emerald-400 bg-clip-text text-transparent pb-2">
            The first-ever fund to be governed by futarchy.
          </h1>
          <p className="text-lg md:text-xl text-mtn-blue mb-12 max-w-2xl mx-auto">
            mtnCapital is pioneering a new approach to investment management, where market predictions guide governance decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <LinkButton href="https://x.com/mtndao/status/1907140496709075404" variant="outline" className="border-mtn-blue text-mtn-blue hover:bg-mtn-blue/10">
              Read about $MTN
            </LinkButton>
            <LinkButton 
              href="https://metadao.fi/launchpad/projects/a3wqnp5LSi84ShMFwfPgULA3rVaNcL67UwTyccbMDNo" 
              className="bg-gradient-to-r from-mtn-blue to-emerald-400 hover:opacity-90 text-white font-semibold"
            >
              Join the Token Sale →
            </LinkButton>
            <LinkButton href="https://www.metadao.fi" variant="outline" className="border-mtn-blue text-mtn-blue hover:bg-mtn-blue/10">
              Trade the futarchy markets
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-radial from-emerald-400/10 to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-radial from-mtn-blue/20 to-transparent opacity-50 blur-3xl"></div>
    </section>
  );
}
