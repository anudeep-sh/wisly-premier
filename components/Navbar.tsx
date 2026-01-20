
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, User, LogOut, LayoutDashboard, Bus, CreditCard, Gamepad2, UserCircle, ShieldAlert, GraduationCap } from 'lucide-react';
import { User as UserType } from '../types';

interface NavbarProps {
  user: UserType | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: BookOpen },
    { name: 'Classrooms', path: '/classrooms', icon: LayoutDashboard },
    { name: 'Fees', path: '/fees', icon: CreditCard },
    { name: 'Bus', path: '/bus', icon: Bus },
    { name: 'Safety', path: '/safety', icon: ShieldAlert },
    { name: 'Faculty', path: '/faculty', icon: GraduationCap },
    { name: 'Games', path: '/games', icon: Gamepad2 },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <span className="text-2xl font-bold tracking-tighter text-blue-600 group-hover:text-blue-700 transition-colors">WISLY</span>
              <span className="ml-2 text-xs font-semibold text-gray-500 uppercase tracking-widest hidden sm:block">Private Limited</span>
            </Link>
            <div className="hidden md:ml-8 md:flex md:space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all flex items-center space-x-1 ${
                    isActive(link.path) ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3 bg-gray-50 p-1.5 rounded-2xl pl-4">
                <Link to="/profile" className="text-gray-700 hover:text-blue-600 flex items-center space-x-2 transition-colors">
                  <span className="text-sm font-bold truncate max-w-[120px]">{user.name}</span>
                  <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                </Link>
                <div className="w-px h-6 bg-gray-200"></div>
                <button
                  onClick={onLogout}
                  className="text-gray-400 hover:text-red-500 p-1.5 transition-colors"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
              >
                Sign In
              </Link>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive(link.path) ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
