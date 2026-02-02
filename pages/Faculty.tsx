
import React, { useState } from 'react';
import { GraduationCap, Award, Star, Mail, Quote, ShieldCheck, Book, X, Send, Loader2, CheckCircle, User, HeartPulse } from 'lucide-react';

const Faculty: React.FC = () => {
  const [selectedProf, setSelectedProf] = useState<any>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const professors = [
    {
      name: "Prof. Arjit Varma",
      background: "Ex-Professor, IIT Delhi",
      specialization: "Advanced Physics & Quantum Mechanics",
      bio: "With over 25 years of experience in research and teaching, Prof. Varma leads our Science department with a focus on conceptual clarity.",
      achievements: "Author of 12 Physics Journals",
      color: "from-blue-600 to-indigo-700",
      dept: "Department of Physical Sciences",
      icon: GraduationCap
    },
    {
      name: "Dr. Sunita S. Deshmukh",
      background: "Ph.D, IISc Bangalore",
      specialization: "Molecular Biology & Genetics",
      bio: "Dr. Sunita brings her passion for life sciences to NeoFin Nex, encouraging students to explore the natural world through innovative labs.",
      achievements: "National Science Award Winner",
      color: "from-emerald-600 to-teal-700",
      dept: "Life Sciences & Research",
      icon: Award
    },
    {
      name: "Prof. Rajesh Khanna",
      background: "M.Tech, IIT Bombay",
      specialization: "Mathematics & Analytical Logic",
      bio: "Prof. Khanna simplifies complex theorems using his unique 'Logic-First' approach, making math accessible to everyone.",
      achievements: "Math Olympiad Mentor",
      color: "from-orange-500 to-red-600",
      dept: "Pure & Applied Mathematics",
      icon: Star
    },
    {
      name: "Dr. Meenakshi Iyer",
      background: "Ex-Faculty, AIIMS Delhi",
      specialization: "Human Anatomy & Health Sciences",
      bio: "A specialist in human physiology, Dr. Iyer helps students understand biological systems with a medical perspective.",
      achievements: "Medical Excellence Contributor",
      color: "from-purple-600 to-pink-600",
      dept: "Faculty of Medical Sciences",
      icon: HeartPulse
    }
  ];

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedProf(null);
      }, 2500);
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-2xl text-sm font-black uppercase tracking-widest mb-6 border border-blue-100">
            <GraduationCap className="w-4 h-4 mr-2" />
            Distinguished Faculty
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight uppercase">Academic <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Mentorship.</span></h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
            Our faculty comprises distinguished academic minds from India's premier institutes including IITs, AIIMS, and IISc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professors.map((prof, i) => (
            <div key={i} className="group relative bg-slate-50 rounded-[3.5rem] p-10 border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className={`w-28 h-28 rounded-[2rem] bg-gradient-to-br ${prof.color} flex items-center justify-center text-white shadow-2xl shrink-0`}>
                   <prof.icon className="w-12 h-12" />
                </div>

                <div className="flex-grow">
                  <div className="flex items-center space-x-3 mb-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest">{prof.background}</span>
                  </div>
                  <h2 className="text-3xl font-black text-gray-900 mb-2">{prof.name}</h2>
                  <p className="text-gray-900 font-bold mb-6 text-lg">{prof.specialization}</p>
                </div>
              </div>
              
              <div className="mt-8 space-y-6">
                <p className="text-gray-500 text-lg leading-relaxed font-medium italic">"{prof.bio}"</p>
                <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{prof.dept}</span>
                  <button 
                    onClick={() => setSelectedProf(prof)}
                    className="px-6 py-3 bg-white text-gray-900 border border-gray-100 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProf && (
        <div className="fixed inset-0 z-[100] bg-gray-900/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-[3.5rem] overflow-hidden shadow-2xl">
            {isSuccess ? (
              <div className="p-20 text-center">
                 <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                 <h3 className="text-3xl font-black uppercase">Message Sent!</h3>
              </div>
            ) : (
              <div className="p-12">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-2xl font-black uppercase">Contact {selectedProf.name}</h3>
                  <button onClick={() => setSelectedProf(null)} className="p-2 bg-gray-100 rounded-full"><X className="w-6 h-6"/></button>
                </div>
                <form onSubmit={handleContact} className="space-y-6">
                  <textarea className="w-full p-6 bg-slate-50 rounded-2xl border-none outline-none font-bold" rows={4} placeholder="Your message..."></textarea>
                  <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xl">Send Inquiry</button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Faculty;
