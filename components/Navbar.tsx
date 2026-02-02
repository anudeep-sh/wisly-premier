
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, LayoutDashboard, Bus, CreditCard, Gamepad2, ShieldAlert, GraduationCap, Sparkles, UserCircle } from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  user?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-blue-200">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-2xl font-black tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors uppercase">WISLY</span>
            </Link>
            
            <div className="hidden lg:ml-10 lg:flex lg:space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-all flex items-center space-x-2 ${
                    isActive(link.path) 
                      ? 'bg-blue-50 text-blue-700 shadow-sm shadow-blue-50' 
                      : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50/80'
                  }`}
                >
                  <link.icon className={`w-4 h-4 ${isActive(link.path) ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <Link to="/profile" className="flex items-center space-x-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-2xl hover:bg-white transition-all">
                <UserCircle className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-gray-700">{user.name.split(' ')[0]}</span>
              </Link>
            ) : (
              <Link
                to="/auth"
                className="bg-gray-900 text-white px-8 py-3 rounded-2xl text-sm font-bold hover:bg-blue-600 transition-all shadow-xl shadow-gray-200 active:scale-95"
              >
                Login
              </Link>
            )}
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-2xl text-gray-600 hover:bg-gray-100 focus:outline-none transition-colors border border-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="pt-24 pb-12 px-6 h-full flex flex-col justify-between overflow-y-auto">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-4 px-6 py-5 rounded-3xl text-xl font-bold transition-all ${
                  isActive(link.path) ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <link.icon className={`w-6 h-6 ${isActive(link.path) ? 'text-white' : 'text-gray-400'}`} />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/classrooms"
              onClick={() => setIsOpen(false)}
              className="w-full bg-blue-600 text-white px-8 py-5 rounded-3xl text-center font-bold text-lg block shadow-2xl shadow-blue-100"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
