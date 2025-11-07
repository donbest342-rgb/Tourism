import { Button } from "./ui/button";
import { MapPin, Menu, Search, User } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'signin' | 'signup' | 'destination' | 'hotels' | 'destinations' | 'plan-trip' | 'travel-guide') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <MapPin className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-900">Sri Lanka Explorer</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('destinations')}
              className={`transition-colors ${
                currentPage === 'destinations' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Destinations
            </button>
            <button 
              onClick={() => onNavigate('hotels')}
              className={`transition-colors ${
                currentPage === 'hotels' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Hotels
            </button>
            <button 
              onClick={() => onNavigate('plan-trip')}
              className={`transition-colors ${
                currentPage === 'plan-trip' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Plan Trip
            </button>
            <button 
              onClick={() => onNavigate('travel-guide')}
              className={`transition-colors ${
                currentPage === 'travel-guide' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Travel Guide
            </button>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Authentication buttons */}
            <div className="hidden md:flex items-center gap-2">
              <Button 
                variant="ghost" 
                onClick={() => onNavigate('signin')}
                className={currentPage === 'signin' ? 'bg-gray-100' : ''}
              >
                Sign In
              </Button>
              <Button 
                onClick={() => onNavigate('signup')}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Sign Up
              </Button>
            </div>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}