
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, GraduationCap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-bold tracking-tighter text-white">WISLY</span>
            <p className="mt-4 text-sm leading-relaxed">
              WISLY Learnings Private Limited is dedicated to providing world-class education that empowers students through innovation, technology, and traditional Indian values.
            </p>
            <div className="flex space-x-4 mt-6">
              <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/classrooms" className="hover:text-blue-400">Classrooms</Link></li>
              <li><Link to="/fees" className="hover:text-blue-400">Fee Structure</Link></li>
              <li><Link to="/bus" className="hover:text-blue-400">Bus Facilities</Link></li>
              <li><Link to="/faculty" className="hover:text-blue-400">Our Professors</Link></li>
              <li><Link to="/safety" className="hover:text-blue-400 flex items-center"><ShieldCheck className="w-3 h-3 mr-1" /> Campus Safety</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal & Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/policies?tab=privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/policies?tab=terms" className="hover:text-blue-400">Terms & Conditions</Link></li>
              <li><Link to="/policies?tab=refund" className="hover:text-blue-400">Refund Policy</Link></li>
              <li><Link to="/policies?tab=safety" className="hover:text-blue-400">Safety Guidelines</Link></li>
              <li><Link to="/safety" className="text-orange-400 hover:text-orange-300 font-bold">Report an Issue</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>123 Knowledge Lane, EdTech Hub, Bangalore, Karnataka, India - 560001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>+91 80-2345-6789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>admissions@wisly.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} WISLY Learnings Private Limited. All Rights Reserved.</p>
          <p className="mt-2 text-gray-500 uppercase tracking-widest font-bold">Education • Innovation • Integrity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
