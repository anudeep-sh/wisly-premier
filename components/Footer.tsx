import React from 'react';
// Added Heart to imports and removed unused GraduationCap and ShieldCheck
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center group mb-8">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-6 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="ml-3 text-3xl font-black tracking-tighter text-gray-900 uppercase">WISLY</span>
            </Link>
            <p className="text-gray-500 text-lg leading-relaxed font-medium mb-8">
              Empowering students through innovation, technology, and traditional Indian values. We build the foundations of success.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-black uppercase text-sm tracking-widest mb-8">Quick Links</h3>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li><Link to="/classrooms" className="hover:text-blue-600 transition-colors">Classrooms</Link></li>
              <li><Link to="/fees" className="hover:text-blue-600 transition-colors">Fee Structure</Link></li>
              <li><Link to="/bus" className="hover:text-blue-600 transition-colors">Bus Routes</Link></li>
              <li><Link to="/faculty" className="hover:text-blue-600 transition-colors">Our Faculty</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-black uppercase text-sm tracking-widest mb-8">Support</h3>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li><Link to="/policies?tab=privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/policies?tab=terms" className="hover:text-blue-600 transition-colors">Terms of Use</Link></li>
              <li><Link to="/safety" className="hover:text-blue-600 transition-colors">Safety Portal</Link></li>
              <li><Link to="/policies?tab=refund" className="hover:text-blue-600 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-gray-900 font-black uppercase text-sm tracking-widest mb-8">Contact Us</h3>
            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600 font-semibold">Sukiran Apartments, Yousufguda, Hyderabad, TS 500045</span>
                </li>
                <li className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600 font-semibold">+91 8143900450</span>
                </li>
                <li className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600 font-semibold">support@thequickpayme.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 font-bold text-sm">
          <p>&copy; {new Date().getFullYear()} NEOFIN NEX India Private Limited. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center">
            Made with <Heart className="w-4 h-4 mx-2 text-red-500 fill-red-500" /> in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
