
import React from 'react';
import { ExternalLink, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-mtn-light">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img 
              src="/wordmark.png" 
              alt="mtnCapital Wordmark" 
              className="h-8 md:h-10 w-auto" 
            />
            <p className="text-mtn-blue text-sm mt-2">
              The first-ever fund to be governed by futarchy.
            </p>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="flex space-x-6">
              <a 
                href="https://www.x.com/mtndao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mtn-blue hover:text-mtn-purple transition-colors"
                aria-label="X Social Media"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.github.com/mtnCapital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mtn-blue hover:text-mtn-purple transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.metadao.fi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-mtn-blue hover:text-mtn-purple transition-colors"
                aria-label="Governance"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            
            <div className="text-xs text-mtn-blue">
              © {new Date().getFullYear()} MTN DAO LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
