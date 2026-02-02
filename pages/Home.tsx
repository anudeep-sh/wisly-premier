
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Users, Bus, Star, BookOpen, Smartphone, ShieldCheck, HeartHandshake, Sparkles, MapPin, Play, Sun, X, ChevronRight, ChevronLeft, Building2, Wifi, Zap, Flower2, HeartPulse } from 'lucide-react';

const Home: React.FC = () => {
  const [showTour, setShowTour] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  const tourData = [
    {
      title: "Digital Gurukul Library",
      desc: "A hybrid sanctuary housing 50,000+ physical volumes and a 24/7 digital archive. Integrated with AI-powered search for rapid research.",
      area: "North Wing - Level 2",
      color: "bg-blue-600",
      feature: "High-Speed WiFi & Research Pods"
    },
    {
      title: "Advanced Quantum Lab",
      desc: "Our labs are equipped with the latest spectroscopy and robotics kits, allowing students to bridge theory with real-world physics experiments.",
      area: "Innovation Hub",
      color: "bg-indigo-600",
      feature: "Industrial Grade Equipment"
    },
    {
      title: "Vedic Sports Pavilion",
      desc: "A dedicated space for Yoga, Kalaripayattu, and modern competitive sports, emphasizing the balance of mind and body.",
      area: "Campus East",
      color: "bg-orange-600",
      feature: "Olympic-Sized Training Grounds"
    },
    {
      title: "Smart Learning Studios",
      desc: "Ergonomic classrooms featuring 4K interactive displays and spatial audio for an immersive hybrid learning experience.",
      area: "Academic Block A",
      color: "bg-emerald-600",
      feature: "AI-Augmented Classrooms"
    }
  ];

  const nextTour = () => setTourStep((prev) => (prev + 1) % tourData.length);
  const prevTour = () => setTourStep((prev) => (prev - 1 + tourData.length) % tourData.length);

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
            <div className="flex-1 text-center lg:text-left relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-gray-100 px-4 py-2 rounded-2xl shadow-sm text-sm font-bold text-blue-600 mb-8 animate-bounce-slow">
                <Sparkles className="w-4 h-4" />
                <span>Premier Global Education Standard</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tight leading-[1.05] mb-8 uppercase">
                Wisdom for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Tomorrow.</span>
              </h1>
              
              <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Rooted in deep-seated values and propelled by modern technology. WISLY is India's most advanced digital learning ecosystem for global leaders.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                <Link
                  to="/classrooms"
                  className="group px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-bold text-lg hover:bg-gray-900 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center relative overflow-hidden active:scale-95"
                >
                  <span className="relative z-10">Start Learning</span>
                  <ArrowRight className="ml-3 w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                </Link>
                <button 
                  onClick={() => setShowTour(true)}
                  className="px-10 py-5 bg-white text-gray-900 border border-gray-100 rounded-[2rem] font-bold text-lg hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center group active:scale-95"
                >
                  <Play className="mr-3 w-5 h-5 text-blue-600 fill-blue-600" />
                  Virtual Tour
                </button>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative z-10 bg-white p-4 rounded-[4rem] shadow-2xl border border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop"
                  alt="Modern Architectural WISLY Campus"
                  className="rounded-[3.5rem] w-full aspect-[4/5] object-cover shadow-inner"
                  decoding="async"
                />
                <div className="absolute inset-4 rounded-[3.2rem] border border-white/20 pointer-events-none"></div>
              </div>
              <div className="absolute -top-10 -right-5 bg-white p-6 rounded-3xl shadow-2xl z-20 animate-float border border-blue-50">
                <div className="flex items-center gap-3 mb-1">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <p className="text-lg font-black text-gray-900">Campus Live</p>
                </div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Secured Network</p>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-6 rounded-3xl shadow-2xl z-20">
                 <Building2 className="w-8 h-8 mb-2" />
                 <p className="text-sm font-black uppercase tracking-widest">Premier Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase">The WISLY Difference</h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              We focus on the holistic evolution of every student through three core pillars.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Vedic Roots", 
                desc: "Reviving ancient Gurukul values of discipline, focus, and ethics for the modern era.", 
                icon: Sun, 
                img: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=2071&auto=format&fit=crop",
                color: "bg-orange-500" 
              },
              { 
                title: "Digital Edge", 
                desc: "Empowering students with AI, coding, and collaborative tools for global success.", 
                icon: Smartphone, 
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
                color: "bg-blue-600" 
              },
              { 
                title: "Holistic Spirit", 
                desc: "Integrated yoga, mindfulness, and sports programs for physical and mental well-being.", 
                icon: HeartHandshake, 
                img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop",
                color: "bg-green-600" 
              }
            ].map((feature, i) => (
              <div key={i} className="group relative bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={feature.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt={feature.title} loading="lazy" />
                </div>
                <div className="p-10">
                  <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-gray-200`}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase">{feature.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holistic Focus Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-950 rounded-[4rem] overflow-hidden relative min-h-[600px] flex flex-col lg:flex-row items-center">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/20 blur-[150px] rounded-full"></div>
            </div>
            
            <div className="flex-1 p-12 lg:p-24 relative z-10">
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-2xl text-emerald-400 text-xs font-black uppercase tracking-widest mb-8">
                <Flower2 className="w-4 h-4" />
                <span>Nurturing the Spirit</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[1.1]">
                Beyond <br/><span className="text-emerald-400">The Books.</span>
              </h2>
              <p className="text-xl text-emerald-100/70 mb-12 max-w-xl font-medium leading-relaxed">
                At WISLY, we believe education is incomplete without a balanced spirit. Our holistic ecosystem integrates daily mindfulness, classical yoga, and elite sports training into the academic calendar.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/20 p-3 rounded-2xl">
                    <HeartPulse className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Vitality Lab</h4>
                    <p className="text-emerald-100/50 text-sm">Personalized health and fitness tracking for every student.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/20 p-3 rounded-2xl">
                    <Zap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Mindfulness Pods</h4>
                    <p className="text-emerald-100/50 text-sm">Quiet spaces designed for meditation and emotional recalibration.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full lg:h-full relative min-h-[400px] lg:min-h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" 
                className="absolute inset-0 w-full h-full object-cover" 
                alt="Holistic Wellness at WISLY" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/20 to-transparent lg:block hidden"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent lg:hidden block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Modal */}
      {showTour && (
        <div className="fixed inset-0 z-[100] bg-gray-950/90 backdrop-blur-xl flex items-center justify-center p-4 lg:p-12">
           <button 
            onClick={() => setShowTour(false)}
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-50 p-2 bg-white/10 rounded-full backdrop-blur-md"
           >
             <X className="w-8 h-8" />
           </button>
           
           <div className="w-full max-w-6xl h-full max-h-[700px] bg-white rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row animate-in fade-in zoom-in duration-500">
             <div className={`md:w-1/2 h-64 md:h-auto ${tourData[tourStep].color} transition-colors duration-700 flex items-center justify-center p-12 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
                </div>
                <div className="relative z-10 text-center text-white space-y-8">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-[2.5rem] flex items-center justify-center mx-auto border border-white/30 shadow-2xl">
                    <Sparkles className="w-12 h-12 text-white animate-pulse" />
                  </div>
                  <div>
                    <span className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] border border-white/30">
                      Exploring Section {tourStep + 1}
                    </span>
                    <h3 className="text-5xl font-black mt-6 tracking-tighter uppercase leading-tight">{tourData[tourStep].title}</h3>
                  </div>
                </div>
             </div>

             <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-between">
               <div className="space-y-10">
                 <div className="flex flex-col gap-2">
                   <div className="flex items-center space-x-3 text-blue-600">
                     <MapPin className="w-6 h-6" />
                     <span className="font-black uppercase tracking-widest text-sm">{tourData[tourStep].area}</span>
                   </div>
                   <div className="flex items-center space-x-3 text-gray-400 mt-2">
                     <Wifi className="w-4 h-4" />
                     <span className="text-xs font-bold uppercase tracking-widest">{tourData[tourStep].feature}</span>
                   </div>
                 </div>
                 
                 <p className="text-2xl text-gray-500 font-medium leading-relaxed">
                   {tourData[tourStep].desc}
                 </p>
               </div>

               <div className="flex items-center justify-between mt-12 pt-12 border-t border-gray-100">
                 <div className="flex gap-4">
                   <button 
                    onClick={prevTour}
                    className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-blue-600 transition-all active:scale-95"
                   >
                     <ChevronLeft className="w-6 h-6" />
                   </button>
                   <button 
                    onClick={nextTour}
                    className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-gray-900 transition-all shadow-xl shadow-blue-100 active:scale-95"
                   >
                     <ChevronRight className="w-6 h-6" />
                   </button>
                 </div>
                 <div className="flex gap-3">
                   {tourData.map((_, i) => (
                     <div key={i} className={`h-1.5 rounded-full transition-all duration-700 ${tourStep === i ? 'w-10 bg-blue-600' : 'w-3 bg-gray-200'}`}></div>
                   ))}
                 </div>
               </div>
             </div>
           </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}} />
    </div>
  );
};

export default Home;
