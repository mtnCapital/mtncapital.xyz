import React from 'react';
import { LinkButton } from './LinkButton';

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-blue-50 to-green-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-mtn-blue to-emerald-400 bg-clip-text text-transparent">
            The first-ever fund to be governed by futarchy
          </h1>
          <p className="text-lg md:text-xl text-mtn-blue mb-10 max-w-2xl mx-auto">
            mtnCapital is pioneering a new approach to investment management, where market predictions guide governance decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <LinkButton href="https://x.com/mtndao/status/1907140496709075404" className="bg-mtn-blue hover:bg-mtn-blue/90">
              Read about $MTN
            </LinkButton>
            <LinkButton href="https://www.metadao.fi" variant="outline" className="border-mtn-blue text-mtn-blue hover:bg-mtn-blue/10">
              Trade the futarchy markets
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gradient-radial from-emerald-400/20 to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-radial from-mtn-blue/20 to-transparent opacity-50 blur-3xl"></div>
    </section>
  );
}
