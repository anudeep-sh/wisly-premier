
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Users, Bus, Star, BookOpen, Smartphone, ShieldCheck, HeartHandshake, Sparkles, MapPin, Play, Sun } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="bg-transparent selection:bg-[var(--primary)]/20 theme-transition">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)] rounded-full blur-[120px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--secondary)] rounded-full blur-[100px] opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-[var(--surface)] border border-gray-100 dark:border-slate-800 px-4 py-2 rounded-2xl shadow-sm text-sm font-bold text-[var(--primary)] mb-8 animate-bounce-slow">
                <Sparkles className="w-4 h-4" />
                <span>The Future of Modern Education</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[1.05] mb-8">
                Learn with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">Excellence.</span>
              </h1>
              
              <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                A premier sanctuary of learning where traditional heritage meets modern global innovation. Join 3,000+ students in a secure, digitally-driven ecosystem at egurukl.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                <Link
                  to="/classrooms"
                  className="group px-10 py-5 bg-[var(--primary)] text-white rounded-[2rem] font-bold text-lg hover:opacity-90 transition-all shadow-2xl flex items-center justify-center relative overflow-hidden active:scale-95"
                >
                  <span className="relative z-10">Start Learning</span>
                  <ArrowRight className="ml-3 w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                </Link>
                <button className="px-10 py-5 bg-[var(--surface)] dark:bg-slate-800 text-inherit border border-gray-100 dark:border-slate-700 rounded-[2rem] font-bold text-lg hover:bg-opacity-80 transition-all shadow-sm flex items-center justify-center group active:scale-95">
                  <Play className="mr-3 w-5 h-5 text-[var(--primary)] fill-[var(--primary)]" />
                  Watch Tour
                </button>
              </div>
              
              <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://images.unsplash.com/photo-${i === 1 ? '1531427186611-ecfd6d936c79' : i === 2 ? '1580489944761-15a19d654956' : i === 3 ? '1507003211169-0a1dd7228f2d' : '1544005313-94ddf0286df2'}?w=100&h=100&fit=crop`} className="w-10 h-10 rounded-full border-2 border-[var(--surface)]" alt="avatar" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold leading-none">Joined by 3000+</p>
                  <p className="text-xs opacity-50 font-semibold mt-1">Happy students and parents</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative z-10 bg-[var(--surface)] p-4 rounded-[4rem] shadow-2xl border border-gray-100 dark:border-slate-800 rotate-2 hover:rotate-0 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                  alt="Students learning"
                  className="rounded-[3.5rem] w-full aspect-[4/5] object-cover"
                />
              </div>
              
              <div className="absolute -top-10 -right-5 bg-[var(--surface)] dark:bg-slate-800 p-6 rounded-3xl shadow-2xl z-20 animate-float">
                <div className="flex items-center space-x-4">
                  <div className="bg-[var(--primary)]/10 p-3 rounded-2xl">
                    <ShieldCheck className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="text-lg font-black">100% Safe</p>
                    <p className="text-xs opacity-50 font-bold uppercase tracking-wider">Campus Security</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-10 bg-[var(--surface)] dark:bg-slate-800 p-6 rounded-3xl shadow-2xl z-20 animate-float-delayed hidden sm:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-[var(--secondary)]/10 p-3 rounded-2xl">
                    <GraduationCap className="w-6 h-6 text-[var(--secondary)]" />
                  </div>
                  <div>
                    <p className="text-lg font-black">Top Faculty</p>
                    <p className="text-xs opacity-50 font-bold uppercase tracking-wider">Expert Mentors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-gray-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-black text-[var(--primary)]">15+</p>
              <p className="text-sm opacity-50 font-bold uppercase mt-1">Year Legacy</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-[var(--secondary)]">100%</p>
              <p className="text-sm opacity-50 font-bold uppercase mt-1">Digital Safety</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-[var(--primary)]">50+</p>
              <p className="text-sm opacity-50 font-bold uppercase mt-1">PhD Professors</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black text-[var(--secondary)]">98%</p>
              <p className="text-sm opacity-50 font-bold uppercase mt-1">Board Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-[var(--bg)]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">egurukl Value System</h2>
            <p className="text-lg opacity-60 font-medium leading-relaxed">
              We bridge the gap between traditional wisdom and high-tech educational needs, nurturing both the mind and the spirit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Holistic Roots", 
                desc: "Integrating traditional Indian wisdom with scientific inquiry.", 
                icon: Sun, 
                img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop",
                color: "bg-[var(--primary)]" 
              },
              { 
                title: "Digital Edge", 
                desc: "5G-connected smart campus with advanced AI firewall protections.", 
                icon: Smartphone, 
                img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
                color: "bg-[var(--secondary)]" 
              },
              { 
                title: "Holistic Spirit", 
                desc: "Daily focus sessions to promote clarity and mental focus.", 
                icon: HeartHandshake, 
                img: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2064&auto=format&fit=crop",
                color: "bg-[var(--primary)]" 
              }
            ].map((feature, i) => (
              <div key={i} className="group relative bg-[var(--surface)] rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 dark:border-slate-800">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={feature.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100" alt={feature.title} />
                </div>
                <div className="p-10">
                  <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-gray-200 dark:shadow-none`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black mb-4">{feature.title}</h3>
                  <p className="opacity-60 font-medium leading-relaxed">{feature.desc}</p>
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)] rounded-full blur-[160px] opacity-20 -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--secondary)] rounded-full blur-[160px] opacity-20 -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to transform <br/> your future?</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                Join the egurukl community today and experience a world-class education designed for the leaders of tomorrow.
              </p>
              <Link
                to="/classrooms"
                className="inline-flex items-center px-12 py-6 bg-[var(--primary)] text-white rounded-[2.5rem] font-black text-xl hover:bg-opacity-90 transition-all shadow-2xl active:scale-95"
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
