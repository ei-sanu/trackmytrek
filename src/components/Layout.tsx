import { UserButton, useUser } from '@clerk/clerk-react';
import { BookOpen, Home, Menu, User, Wrench, X } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { user, isSignedIn } = useUser();
  const location = useLocation();

  const navItems = [
    { name: 'Pathways', path: '/', icon: Home },
    { name: 'Know Yourself', path: '/know-yourself', icon: User },
    { name: 'To Build', path: '/ToBuild', icon: Wrench },
    { name: 'About Us', path: '/about', icon: BookOpen },
    { name: 'Contact', path: '/contact', icon: BookOpen },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1933] via-[#0f2447] to-[#1a365d]">
      {/* Header */}
      <header className="bg-[#0A1933]/95 backdrop-blur-md border-b border-[#1a365d] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TrackMyTrek</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-navy-700 hover:text-white'
                    }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              {isSignedIn ? (
                <div className="flex items-center space-x-3 ml-4">
                  <span className="text-sm text-gray-300">Welcom, {user.firstName}!</span>
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <Link
                  to="/sign-in"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sign In
                </Link>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-navy-700"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-navy-800 border-t border-navy-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-navy-700 hover:text-white'
                    }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A1933] border-t border-[#1a365d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">TrackMyTrek</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your comprehensive platform for career development and skill building across 30+ domains.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white text-sm">Pathways</Link></li>
                <li><Link to="/know-yourself" className="text-gray-400 hover:text-white text-sm">Know Yourself</Link></li>
                <li><Link to="/ToBuild" className="text-gray-400 hover:text-white text-sm">To Build</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact Us</Link></li>
                <li><Link to="/Privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
                <li><Link to="/Terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <p className="text-gray-400 text-sm">
                Follow us on social media for updates and career tips.
              </p>
            </div>
          </div>

          <div className="border-t border-navy-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 CareerGuidance. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
