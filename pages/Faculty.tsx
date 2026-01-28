
import React from 'react';
import { GraduationCap, Award, BookOpen, Star, Linkedin, Mail, ArrowRight, Quote } from 'lucide-react';

const Faculty: React.FC = () => {
  const professors = [
    {
      name: "Prof. Arjit Varma",
      background: "Ex-Professor, IIT Delhi",
      specialization: "Advanced Physics & Quantum Mechanics",
      bio: "With over 25 years of experience in research and teaching, Prof. Varma leads our Science department with a focus on conceptual clarity.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop",
      achievements: "Author of 12 Physics Journals"
    },
    {
      name: "Dr. Meenakshi Iyer",
      background: "Ph.D, IISc Bangalore",
      specialization: "Molecular Biology & Genetics",
      bio: "Dr. Iyer brings her passion for life sciences to egurukl, encouraging students to explore the natural world through innovative labs.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=600&fit=crop",
      achievements: "National Science Award Winner"
    },
    {
      name: "Prof. Rajesh Khanna",
      background: "M.Tech, IIT Bombay",
      specialization: "Mathematics & Analytical Logic",
      bio: "Prof. Khanna simplifies complex theorems using his unique 'Logic-First' approach, making math accessible to everyone.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
      achievements: "Math Olympiad Mentor"
    },
    {
      name: "Dr. Sunita Deshmukh",
      background: "Ex-Faculty, JNU",
      specialization: "History & Cultural Heritage",
      bio: "A specialist in Indian history, Dr. Deshmukh helps students connect with their roots while understanding global shifts.",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de5984?w=600&h=600&fit=crop",
      achievements: "UNESCO Heritage Contributor"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-2xl text-sm font-black uppercase tracking-widest mb-6 border border-blue-100">
            <GraduationCap className="w-4 h-4 mr-2" />
            World Class Faculty
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight">Meet your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Mentors.</span></h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
            At egurukl, we handpick distinguished academic minds from India's premier institutes like IITs, IIMs, and NITs to guide our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {professors.map((prof, i) => (
            <div key={i} className="group relative flex flex-col md:flex-row gap-10 items-center">
              <div className="relative w-full md:w-2/5 aspect-square shrink-0">
                <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
                <img 
                  src={prof.image} 
                  alt={prof.name} 
                  className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-3xl shadow-xl flex space-x-2">
                  <button className="p-3 bg-blue-50 rounded-2xl text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-blue-50 rounded-2xl text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="md:w-3/5">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-yellow-100 p-2 rounded-xl">
                    <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                  </div>
                  <span className="text-xs font-black text-blue-600 uppercase tracking-widest">{prof.background}</span>
                </div>
                
                <h2 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{prof.name}</h2>
                <p className="text-gray-900 font-bold mb-6 text-lg">{prof.specialization}</p>
                
                <div className="relative mb-8">
                  <Quote className="absolute -left-2 -top-4 w-12 h-12 text-gray-50 opacity-10" />
                  <p className="text-gray-500 text-lg leading-relaxed font-medium italic relative z-10">
                    "{prof.bio}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 bg-slate-50 p-5 rounded-[2rem] border border-gray-100">
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <Award className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Notable Achievement</p>
                    <p className="text-gray-900 font-bold">{prof.achievements}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action section for faculty */}
        <div className="mt-40 bg-gray-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase">Advice for every student.</h2>
            <p className="text-xl text-gray-400 mb-12 font-medium leading-relaxed">
              Unlock your potential with personal mentorship from egurukl's brilliant academic minds.
            </p>
            <button className="px-12 py-6 bg-white text-gray-900 rounded-[2.5rem] font-black text-xl hover:bg-blue-600 hover:text-white transition-all shadow-2xl active:scale-95 flex items-center mx-auto group">
              Schedule Mentorship
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
