
import React from 'react';
import { Classroom } from '../types';
import { BookOpen, Users, User, Star, CheckCircle2, Layout, Smartphone, Globe } from 'lucide-react';

interface ExtendedClassroom extends Classroom {
  subjectDetails: {
    description: string;
    topics: string[];
    bannerImage: string;
    icon: any;
    color: string;
  };
}

const Classrooms: React.FC = () => {
  const classrooms: ExtendedClassroom[] = [
    {
      id: '1',
      grade: 'Grade 10',
      section: 'A',
      strength: 32,
      teacher: {
        id: 't1',
        name: 'Mrs. Emily Parker',
        subject: 'English Literature',
        qualification: 'M.A., B.Ed',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400'
      },
      subjectDetails: {
        bannerImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop',
        description: "Focuses on developing critical thinking through classical literature and advanced linguistics.",
        topics: ["Shakespearean Drama", "Poetic Analysis", "Persuasive Writing", "Grammar & Syntax"],
        icon: Globe,
        color: "bg-blue-600"
      }
    },
    {
      id: '2',
      grade: 'Grade 10',
      section: 'B',
      strength: 30,
      teacher: {
        id: 't2',
        name: 'Mr. David Miller',
        subject: 'Mathematics',
        qualification: 'M.Sc, Mathematics',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400'
      },
      subjectDetails: {
        bannerImage: 'https://images.unsplash.com/photo-1509228468518-180dd48219d8?q=80&w=1200&auto=format&fit=crop',
        description: "A deep dive into logic, spatial reasoning, and the fundamental language of the universe.",
        topics: ["Trigonometric Ratios", "Polynomial Equations", "Differential Calculus", "Probability Theory"],
        icon: Layout,
        color: "bg-indigo-600"
      }
    },
    {
      id: '3',
      grade: 'Grade 11',
      section: 'Science',
      strength: 28,
      teacher: {
        id: 't3',
        name: 'Dr. Anita Roy',
        subject: 'Physics',
        qualification: 'Ph.D, Physics',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400'
      },
      subjectDetails: {
        bannerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
        description: "Exploring the fundamental laws of nature, energy, and mechanical systems.",
        topics: ["Quantum Mechanics Intro", "Electromagnetism", "Optics & Photonics", "Thermodynamics"],
        icon: Smartphone,
        color: "bg-teal-600"
      }
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-2xl text-sm font-black uppercase tracking-widest mb-6">
            Learning Experience
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 uppercase tracking-tight">Academic <span className="text-blue-600">Core.</span></h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">
            Explore our curated subject modules designed by the expert faculty at WISLY.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {classrooms.map((cls) => (
            <div key={cls.id} className="bg-white rounded-[3.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 flex flex-col group hover:-translate-y-2 transition-all duration-500">
              <div className="h-64 w-full relative overflow-hidden">
                <img src={cls.subjectDetails.bannerImage} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="subject banner" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-12 flex items-center gap-6">
                   <div className={`${cls.subjectDetails.color} w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-2xl`}>
                     <cls.subjectDetails.icon className="w-10 h-10" />
                   </div>
                   <div>
                     <span className="bg-white/20 backdrop-blur-md text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] border border-white/30">
                       {cls.grade}
                     </span>
                     <h2 className="text-4xl font-black text-white mt-2 tracking-tight">{cls.teacher.subject}</h2>
                   </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row p-12 gap-16">
                <div className="md:w-1/3 space-y-8">
                  <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-[2.5rem] border border-gray-100">
                    <img src={cls.teacher.image} alt={cls.teacher.name} className="w-24 h-24 rounded-[2rem] object-cover shadow-xl border-4 border-white" />
                    <div>
                      <h4 className="font-black text-gray-900 text-xl leading-tight">{cls.teacher.name}</h4>
                      <p className="text-xs text-blue-600 font-black uppercase mt-2 tracking-widest">{cls.teacher.qualification}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center px-4">
                    <div className="flex items-center text-gray-400 font-bold">
                      <Users className="w-5 h-5 mr-3 text-blue-500" />
                      <span>{cls.strength} Active Students</span>
                    </div>
                    <div className="bg-yellow-50 text-yellow-700 px-4 py-1.5 rounded-full text-xs font-black uppercase flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-yellow-600" />
                      4.9 Rating
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 space-y-10">
                  <div className="prose prose-lg prose-slate">
                    <h3 className="text-gray-900 font-black mb-4 flex items-center uppercase tracking-widest text-sm">
                      <BookOpen className="w-5 h-5 mr-3 text-blue-600" />
                      Subject Overview
                    </h3>
                    <p className="text-gray-500 font-medium leading-relaxed text-lg">
                      {cls.subjectDetails.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 font-black mb-6 flex items-center uppercase tracking-widest text-sm">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" />
                      Learning Modules
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cls.subjectDetails.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-gray-100 font-bold text-gray-700 group/item hover:bg-white hover:border-blue-200 transition-all">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover/item:scale-150 transition-transform"></div>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 flex gap-4">
                    <button className="flex-1 py-5 bg-gray-900 text-white rounded-[2rem] font-black text-lg hover:bg-blue-600 transition-all shadow-xl active:scale-95">
                      View Curriculum
                    </button>
                    <button className="px-8 py-5 bg-white text-gray-400 border border-gray-100 rounded-[2rem] hover:text-blue-600 hover:border-blue-100 transition-all shadow-sm active:scale-95">
                      <User className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classrooms;
