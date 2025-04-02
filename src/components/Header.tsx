import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const NavLinks = ({ className, onClick }: { className?: string; onClick?: () => void }) => (
  <>
    <Link 
      to="/" 
      className={cn(
        "text-mtn-darkblue hover:text-mtn-purple transition-colors text-sm font-medium",
        className
      )}
      onClick={onClick}
    >
      Home
    </Link>
    <a 
      href="https://x.com/mtndao/status/1907140496709075404" 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "text-mtn-darkblue hover:text-mtn-purple transition-colors text-sm font-medium",
        className
      )}
      onClick={onClick}
    >
      About $MTN
    </a>
    <a 
      href="https://www.metadao.fi" 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "text-mtn-darkblue hover:text-mtn-purple transition-colors text-sm font-medium",
        className
      )}
      onClick={onClick}
    >
      Governance
    </a>
    <Link 
      to="/oa" 
      className={cn(
        "text-mtn-darkblue hover:text-mtn-purple transition-colors text-sm font-medium",
        className
      )}
      onClick={onClick}
    >
      DAO Operating Agreement
    </Link>
  </>
);

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full py-6">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="mtnCapital Logo" 
            className="h-12 w-auto" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-mtn-darkblue hover:text-mtn-purple transition-colors">
              <Menu size={24} />
              <span className="sr-only">Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-6 mt-12">
              <NavLinks 
                className="text-lg !text-left" 
                onClick={() => setOpen(false)}
              />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
