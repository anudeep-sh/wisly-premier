
import React from 'react';
import { GraduationCap, Award, BookOpen, Star, Linkedin, Mail } from 'lucide-react';

const Faculty: React.FC = () => {
  const professors = [
    {
      name: "Prof. Arjit Varma",
      background: "Ex-Professor, IIT Delhi",
      specialization: "Advanced Physics & Quantum Mechanics",
      bio: "With over 25 years of experience in research and teaching, Prof. Varma leads our Science department with a focus on conceptual clarity and real-world application.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400&h=400",
      achievements: "Author of 12 Physics Journals"
    },
    {
      name: "Dr. Meenakshi Iyer",
      background: "Ph.D, IISc Bangalore",
      specialization: "Molecular Biology & Genetics",
      bio: "Dr. Iyer brings her passion for life sciences to WISLY, encouraging students to explore the wonders of the natural world through innovative lab sessions.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
      achievements: "National Science Award Winner"
    },
    {
      name: "Prof. Rajesh Khanna",
      background: "M.Tech, IIT Bombay",
      specialization: "Mathematics & Analytical Logic",
      bio: "Prof. Khanna simplifies complex mathematical theorems using his unique 'Logic-First' approach, making math the favorite subject for many WISLY students.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
      achievements: "Math Olympiad Mentor"
    },
    {
      name: "Dr. Sunita Deshmukh",
      background: "Ex-Faculty, JNU",
      specialization: "History & Cultural Heritage",
      bio: "A specialist in Indian history, Dr. Deshmukh helps students connect with their roots while understanding global geopolitical shifts.",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de5984?auto=format&fit=crop&q=80&w=400&h=400",
      achievements: "UNESCO Heritage Contributor"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Excellence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Our Distinguished Indian Professors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At WISLY Private Limited, our students are mentored by the best academic minds from India's premier institutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {professors.map((prof, i) => (
            <div key={i} className="bg-white rounded-[3rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex-shrink-0">
                <img 
                  src={prof.image} 
                  alt={prof.name} 
                  className="w-full aspect-square object-cover rounded-[2.5rem] shadow-lg border-4 border-white" 
                />
                <div className="mt-4 flex justify-center space-x-2">
                  <button className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-blue-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{prof.name}</h2>
                    <p className="text-blue-600 font-bold text-sm uppercase tracking-wider">{prof.background}</p>
                  </div>
                  <div className="bg-yellow-50 p-2 rounded-xl">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  </div>
                </div>
                
                <div className="mb-4">
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Specialization</span>
                   <p className="text-gray-800 font-semibold">{prof.specialization}</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  "{prof.bio}"
                </p>

                <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <Award className="w-5 h-5 text-orange-500" />
                  <span className="text-xs font-bold text-slate-700">{prof.achievements}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-50 blur-3xl pointer-events-none"></div>
          <BookOpen className="w-12 h-12 text-white/50 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Learn from India's Finest</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Our selection process ensures that every professor at WISLY Private Limited shares our commitment to student success and moral growth.
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-xl">
            Book a Counseling Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
