
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, UserPlus, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/sonner';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
    };
    
    checkSession();
    
    // Subscribe to auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );
    
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Signed out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to sign out');
    }
  };

  return (
    <nav className="border-b bg-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-brand-blue transition-colors">
            Home
          </Link>
          <Link to="/templates" className="text-gray-600 hover:text-brand-blue transition-colors">
            Templates
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-brand-blue transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-brand-blue transition-colors">
            About
          </Link>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/dashboard">
                <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white">
                  Dashboard
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                onClick={handleSignOut}
              >
                <LogOut size={16} className="mr-2" />
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white">
                  <UserPlus size={16} className="mr-2" />
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[65px] z-50 bg-white border-b shadow-lg transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container py-4 flex flex-col space-y-4">
          <Link
            to="/"
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/templates"
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Templates
          </Link>
          <Link
            to="/pricing"
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="flex flex-col space-y-2 pt-2 border-t">
            {user ? (
              <>
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white">
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut size={16} className="mr-2" />
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white"
                  >
                    Log in
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white"
                  >
                    <UserPlus size={16} className="mr-2" />
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
