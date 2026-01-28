
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-slate-900 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center group mb-8">
              <div className="bg-[var(--primary)] p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-3xl font-black tracking-tighter text-gray-900 dark:text-white uppercase">egurukl</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-medium mb-8">
              Empowering students through innovation, technology, and traditional values. We build the foundations of success.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-slate-800 flex items-center justify-center text-gray-400 hover:bg-[var(--primary)] hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-gray-900 dark:text-white font-black uppercase text-sm tracking-widest mb-8">Quick Links</h3>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400 font-bold">
              <li><Link to="/classrooms" className="hover:text-[var(--primary)] transition-colors">Classrooms</Link></li>
              <li><Link to="/fees" className="hover:text-[var(--primary)] transition-colors">Fee Structure</Link></li>
              <li><Link to="/bus" className="hover:text-[var(--primary)] transition-colors">Bus Routes</Link></li>
              <li><Link to="/faculty" className="hover:text-[var(--primary)] transition-colors">Our Faculty</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-gray-900 dark:text-white font-black uppercase text-sm tracking-widest mb-8">Support</h3>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400 font-bold">
              <li><Link to="/policies?tab=privacy" className="hover:text-[var(--primary)] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/policies?tab=terms" className="hover:text-[var(--primary)] transition-colors">Terms of Use</Link></li>
              <li><Link to="/safety" className="hover:text-[var(--primary)] transition-colors">Safety Portal</Link></li>
              <li><Link to="/policies?tab=refund" className="hover:text-[var(--primary)] transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-gray-900 dark:text-white font-black uppercase text-sm tracking-widest mb-8">Contact Us</h3>
            <div className="bg-gray-50 dark:bg-slate-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-700 shadow-sm">
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[var(--primary)] flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 font-semibold">11-9-15, A J MILLS, OCITY, Shivnagar, Warangal – 506002, Telangana</span>
                </li>
                <li className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-[var(--secondary)] flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 font-semibold">+91 9490053646</span>
                </li>
                <li className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-[var(--primary)] flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300 font-semibold">support@mtstsevakendra.in</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-slate-800 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 font-bold text-sm">
          <p>&copy; {new Date().getFullYear()} MTST SEVA Technologies Pvt. Ltd. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-600 fill-red-600" /> in Warangal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
