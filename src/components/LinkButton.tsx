
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}

export function LinkButton({ 
  href, 
  children, 
  className,
  variant = 'default'
}: LinkButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mtn-purple focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variantStyles = {
    default: "bg-mtn-darkpurple text-white hover:bg-mtn-purple",
    outline: "border border-mtn-blue text-mtn-darkblue hover:bg-mtn-light hover:text-mtn-darkpurple"
  };
  
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        baseStyles,
        variantStyles[variant],
        "px-4 py-2",
        className
      )}
    >
      {children}
      <ExternalLink className="ml-2 h-4 w-4" />
    </a>
  );
}
