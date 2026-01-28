
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, LayoutDashboard, Bus, CreditCard, Gamepad2, ShieldAlert, GraduationCap, Maximize, Minimize, Palette, Library } from 'lucide-react';

type Theme = 'vibrant' | 'royal' | 'cyber' | 'forest';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>('vibrant');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Load theme from local storage
    const savedTheme = localStorage.getItem('egurukl-theme') as Theme;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const themes: Theme[] = ['vibrant', 'royal', 'cyber', 'forest'];
    const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('egurukl-theme', nextTheme);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

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

  // Theme-aware dynamic classes
  const primaryBg = "bg-[var(--primary)]";
  const primaryText = "text-[var(--primary)]";
  const secondaryBg = "bg-[var(--secondary)]";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-gray-100 dark:border-slate-800 shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className={`${primaryBg} p-2 rounded-xl group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-[var(--primary)]/20 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <GraduationCap className="w-6 h-6 text-white relative z-10" />
              </div>
              <div className="ml-3 flex flex-col justify-center">
                <span className="text-2xl font-black tracking-tighter dark:text-white group-hover:text-[var(--primary)] transition-colors uppercase leading-none">egurukl</span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-none mt-0.5">Learn Beyond</span>
              </div>
            </Link>
            
            <div className="hidden lg:ml-10 lg:flex lg:space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-2xl text-sm font-semibold transition-all flex items-center space-x-2 ${
                    isActive(link.path) 
                      ? `${secondaryBg} text-white shadow-lg scale-105` 
                      : 'text-gray-500 hover:text-[var(--primary)] hover:bg-[var(--primary)]/5'
                  }`}
                >
                  <link.icon className={`w-4 h-4 ${isActive(link.path) ? 'text-white' : 'text-gray-400 group-hover:text-[var(--primary)]'}`} />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-3 bg-gray-50 dark:bg-slate-800 text-gray-500 rounded-2xl hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-all active:scale-90"
              title="Change Theme"
            >
              <Palette className="w-5 h-5" />
            </button>
            <button
              onClick={toggleFullScreen}
              className="p-3 bg-gray-50 dark:bg-slate-800 text-gray-500 rounded-2xl hover:bg-[var(--secondary)]/10 hover:text-[var(--secondary)] transition-all active:scale-90"
              title="Toggle Full Screen"
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
            <Link
              to="/classrooms"
              className={`${primaryBg} text-white px-8 py-3 rounded-2xl text-sm font-bold hover:opacity-90 transition-all shadow-xl active:scale-95`}
            >
              Get Started
            </Link>
          </div>

          <div className="flex items-center lg:hidden space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-2xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Palette className="h-5 w-5" />
            </button>
            <button
              onClick={toggleFullScreen}
              className="p-2.5 rounded-2xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-2xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none transition-colors border border-gray-100 dark:border-slate-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white dark:bg-slate-900 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="pt-24 pb-12 px-6 h-full flex flex-col justify-between overflow-y-auto">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-4 px-6 py-5 rounded-3xl text-xl font-bold transition-all ${
                  isActive(link.path) ? `${primaryBg} text-white shadow-xl` : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800'
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
              className={`w-full ${secondaryBg} text-white px-8 py-5 rounded-3xl text-center font-bold text-lg block shadow-2xl`}
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
