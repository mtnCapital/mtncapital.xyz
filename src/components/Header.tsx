
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="w-full py-6">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/4d919970-0438-40eb-8e72-cbc2f5897d6d.png" 
            alt="mtnCapital Logo" 
            className="h-12 w-auto" 
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "text-mtn-darkblue hover:text-mtn-purple transition-colors text-sm font-medium"
            )}
          >
            Home
          </Link>
          <a 
            href="https://x.com/mtndao/status/1907140496709075404" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-mtn-darkblue hover:text-mtn-purple transition-colors text-sm font-medium"
          >
            $MTN
          </a>
          <a 
            href="https://www.metadao.fi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-mtn-darkblue hover:text-mtn-purple transition-colors text-sm font-medium"
          >
            Markets
          </a>
          <Link 
            to="/oa" 
            className={cn(
              "text-mtn-darkblue hover:text-mtn-purple transition-colors text-sm font-medium"
            )}
          >
            DAO Operating Agreement
          </Link>
        </nav>
      </div>
    </header>
  );
}
