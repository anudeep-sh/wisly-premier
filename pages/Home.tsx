
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Users, Bus, Star, BookOpen, Smartphone, ShieldCheck, HeartHandshake, Sparkles, MapPin, Play, Sun } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-white selection:bg-blue-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-[100px] opacity-40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white border border-gray-100 px-4 py-2 rounded-2xl shadow-sm text-sm font-bold text-blue-600 mb-8 animate-bounce-slow">
                <Sparkles className="w-4 h-4" />
                <span>The Future of Indian Education</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tight leading-[1.05] mb-8">
                Learn with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Excellence.</span>
              </h1>
              
              <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                A premier sanctuary of learning where ancient Indian heritage meets modern global innovation. Join 3,000+ students in a secure, digitally-driven ecosystem at WISLY.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                <Link
                  to="/classrooms"
                  className="group px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-bold text-lg hover:bg-gray-900 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center relative overflow-hidden active:scale-95"
                >
                  <span className="relative z-10">Start Learning</span>
                  <ArrowRight className="ml-3 w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                </Link>
                <button className="px-10 py-5 bg-white text-gray-900 border border-gray-100 rounded-[2rem] font-bold text-lg hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center group active:scale-95">
                  <Play className="mr-3 w-5 h-5 text-blue-600 fill-blue-600" />
                  Watch Tour
                </button>
              </div>
              
              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="avatar" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-900 leading-none">Joined by 3000+</p>
                  <p className="text-xs text-gray-400 font-semibold mt-1">Happy students and parents</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative z-10 bg-white p-4 rounded-[4rem] shadow-2xl border border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop"
                  alt="Students learning"
                  className="rounded-[3.5rem] w-full aspect-[4/5] object-cover"
                />
              </div>
              
              <div className="absolute -top-10 -right-5 bg-white p-6 rounded-3xl shadow-2xl z-20 animate-float">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-2xl">
                    <ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-gray-900">100% Safe</p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Campus Security</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 animate-float-delayed hidden sm:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-2xl">
                    <GraduationCap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-gray-900">Top Faculty</p>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Expert Mentors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Logos Bar */}
      <section className="py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-black text-gray-900">15+</p>
              <p className="text-sm text-gray-400 font-bold uppercase mt-1">Year Legacy</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-gray-900">100%</p>
              <p className="text-sm text-gray-400 font-bold uppercase mt-1">Digital Safety</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-gray-900">50+</p>
              <p className="text-sm text-gray-400 font-bold uppercase mt-1">PhD Professors</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-gray-900">98%</p>
              <p className="text-sm text-gray-400 font-bold uppercase mt-1">Board Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">WISLY Value System</h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              We bridge the gap between traditional wisdom and high-tech educational needs, nurturing both the mind and the spirit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Vedic Roots", 
                desc: "Integrating traditional Indian wisdom with scientific inquiry.", 
                icon: Sun, 
                img: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070&auto=format&fit=crop",
                color: "bg-orange-500" 
              },
              { 
                title: "Digital Edge", 
                desc: "5G-connected smart campus with advanced AI firewall protections.", 
                icon: Smartphone, 
                img: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop",
                color: "bg-blue-600" 
              },
              { 
                title: "Holistic Spirit", 
                desc: "Daily dhyana sessions to promote focus and mental clarity.", 
                icon: HeartHandshake, 
                img: "https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=2070&auto=format&fit=crop",
                color: "bg-green-600" 
              }
            ].map((feature, i) => (
              <div key={i} className="group relative bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={feature.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={feature.title} />
                </div>
                <div className="p-10">
                  <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-gray-200`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[160px] opacity-30 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-[160px] opacity-30 -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to transform <br/> your future?</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                Join the WISLY community today and experience a world-class education designed for the leaders of tomorrow.
              </p>
              <Link
                to="/classrooms"
                className="inline-flex items-center px-12 py-6 bg-white text-gray-900 rounded-[2.5rem] font-black text-xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95"
              >
                Enroll Now
                <ArrowRight className="ml-3 w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out infinite 3s; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
    </div>
  );
};

export default Home;
