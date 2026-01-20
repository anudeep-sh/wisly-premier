
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Users, Bus, Trophy, Star, BookOpen, Smartphone, Heart, Sun, Cloud, ShieldCheck, HeartHandshake, Sparkles, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-orange-50 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-green-50 blur-3xl opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-bold border border-blue-100">
                <Sparkles className="w-4 h-4" />
                <span>WISLY Learnings Private Limited</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                Empowering the <span className="text-blue-600">Leaders</span> of Tomorrow
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
                A premier sanctuary of learning where ancient Indian heritage meets modern global innovation. Join 3,000+ students in a 100% safe, digitally superior ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  to="/auth"
                  className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200/50 flex items-center justify-center group"
                >
                  Join our Gurukul
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/safety"
                  className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-md flex items-center justify-center"
                >
                  Safety Standards
                </Link>
              </div>
            </div>
            
            <div className="mt-16 lg:mt-0 relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop"
                  alt="Indian Students"
                  className="rounded-[3rem] shadow-2xl w-full aspect-[4/3] object-cover border-8 border-white"
                />
              </div>
              <div className="absolute -top-10 -right-10 bg-orange-500 text-white p-6 rounded-3xl shadow-xl z-20 flex items-center space-x-3 border-4 border-white hidden sm:flex">
                <ShieldCheck className="w-8 h-8" />
                <div>
                  <div className="text-lg font-bold">100% Safe Campus</div>
                  <div className="text-xs opacity-80 uppercase tracking-widest">CCTV & Digital Vigilance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual & God Imagery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Values that Define Us</h2>
            <p className="text-gray-600">Deeply rooted in the spiritual richness of Indian culture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group overflow-hidden rounded-[2.5rem] relative h-96">
              <img src="https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Meditation" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent flex flex-col justify-end p-8 text-white">
                <h4 className="text-2xl font-bold">Inner Peace</h4>
                <p className="text-gray-300 text-sm mt-2">Daily Dhyana sessions for mental clarity and focus.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-[2.5rem] relative h-96 md:translate-y-8">
              <img src="https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Nature Wisdom" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent flex flex-col justify-end p-8 text-white">
                <h4 className="text-2xl font-bold">Divine Harmony</h4>
                <p className="text-gray-300 text-sm mt-2">Recognizing the sacred connection between education and nature.</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-[2.5rem] relative h-96">
              <img src="https://images.unsplash.com/photo-1493246507139-91e8bef99c17?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Cultural Legacy" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent flex flex-col justify-end p-8 text-white">
                <h4 className="text-2xl font-bold">Vedic Values</h4>
                <p className="text-gray-300 text-sm mt-2">Integrating traditional wisdom with modern scientific inquiry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Infrastructure Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>World-Class Infrastructure</span>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Designed for Safety, Built for <span className="text-blue-600">Excellence</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <Smartphone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Smart Campus</h4>
                    <p className="text-gray-600 text-sm">High-speed 5G Wi-Fi with AI-powered firewall for student safety.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <Bus className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Elite Bus Fleet</h4>
                    <p className="text-gray-600 text-sm">GPS Tracking, CCTV, and trained lady attendants on every route.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Strategically Located</h4>
                    <p className="text-gray-600 text-sm">Quiet, green campus away from city pollution and noise.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop" className="rounded-[3rem] shadow-2xl" alt="University" />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">98%</div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">Board Results</p>
                    <p className="font-bold text-gray-900">Distinction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
