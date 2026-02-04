
import React, { useState } from 'react';
import { Classroom } from '../types';
import { BookOpen, Users, User, Star, CheckCircle2, Layout, Smartphone, Globe, ShieldCheck, X, FileText, Download, CheckCircle } from 'lucide-react';

interface ExtendedClassroom extends Classroom {
  subjectDetails: {
    description: string;
    topics: string[];
    icon: any;
    color: string;
    gradient: string;
    syllabus: { term: string; contents: string[] }[];
  };
}

const Classrooms: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<ExtendedClassroom | null>(null);

  const classrooms: ExtendedClassroom[] = [
    {
      id: '1',
      grade: 'Grade 10',
      section: 'A',
      strength: 32,
      teacher: {
        id: 't1',
        name: 'Smt. Lakshmi Devi',
        subject: 'English Literature',
        qualification: 'M.A., B.Ed',
        image: ''
      },
      subjectDetails: {
        description: "Focuses on developing critical thinking through classical literature and advanced linguistics.",
        topics: ["Shakespearean Drama", "Poetic Analysis", "Persuasive Writing", "Grammar & Syntax"],
        icon: Globe,
        color: "text-blue-600",
        gradient: "from-blue-600 to-indigo-700",
        syllabus: [
          { term: "Term 1", contents: ["The Merchant of Venice (Act I-III)", "Modern Indian Poetry", "Essay Writing Techniques"] },
          { term: "Term 2", contents: ["Classic Short Stories", "Advanced Syntax & Logic", "Debate & Public Speaking"] }
        ]
      }
    },
    {
      id: '2',
      grade: 'Grade 10',
      section: 'B',
      strength: 30,
      teacher: {
        id: 't2',
        name: 'Shri. Rajesh Khanna',
        subject: 'Mathematics',
        qualification: 'M.Sc, Mathematics',
        image: ''
      },
      subjectDetails: {
        description: "A deep dive into logic, spatial reasoning, and the fundamental language of the universe.",
        topics: ["Trigonometric Ratios", "Polynomial Equations", "Differential Calculus", "Probability Theory"],
        icon: Layout,
        color: "text-indigo-600",
        gradient: "from-indigo-600 to-purple-700",
        syllabus: [
          { term: "Term 1", contents: ["Real Numbers & Polynomials", "Linear Equations", "Arithmetic Progressions"] },
          { term: "Term 2", contents: ["Coordinate Geometry", "Calculus Introduction", "Statistics & Probability"] }
        ]
      }
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-2xl text-sm font-black uppercase tracking-widest mb-6">
            WISLY Academic Core
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 uppercase tracking-tight">Curriculum <span className="text-blue-600">Roadmap.</span></h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">
            Standardized curriculum modules delivered by our distinguished faculty at WISLY.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {classrooms.map((cls) => (
            <div key={cls.id} className="bg-white rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col group hover:-translate-y-2 transition-all duration-500">
              <div className={`h-48 w-full bg-gradient-to-r ${cls.subjectDetails.gradient} relative overflow-hidden flex items-center px-12`}>
                <div className="relative z-10 flex items-center gap-8 text-white">
                   <div className="bg-white/20 backdrop-blur-xl w-24 h-24 rounded-[2rem] flex items-center justify-center border border-white/30">
                     <cls.subjectDetails.icon className="w-12 h-12" />
                   </div>
                   <div>
                     <span className="text-xs font-black uppercase tracking-[0.2em]">{cls.grade}</span>
                     <h2 className="text-4xl font-black mt-2 tracking-tight uppercase">{cls.teacher.subject}</h2>
                   </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row p-12 gap-16">
                <div className="md:w-1/3 space-y-8">
                  <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-[2.5rem] border border-gray-100">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-white shadow-xl flex items-center justify-center text-3xl font-black text-blue-600 border border-gray-100">
                      {cls.teacher.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 text-xl leading-tight">{cls.teacher.name}</h4>
                      <div className="flex items-center text-blue-600 mt-1">
                        <ShieldCheck className="w-4 h-4 mr-1" />
                        <span className="text-xs font-black uppercase tracking-widest">Verified Faculty</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <p className="text-gray-500 text-lg font-medium leading-relaxed mb-8">{cls.subjectDetails.description}</p>
                  <div className="flex gap-4">
                    <button onClick={() => setSelectedClass(cls)} className="flex-1 py-5 bg-gray-900 text-white rounded-[2rem] font-black hover:bg-blue-600 transition-all">View Curriculum</button>
                    <button className="px-8 py-5 bg-white text-gray-400 border border-gray-100 rounded-[2rem] hover:text-blue-600 transition-all">
                      <FileText className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum Modal */}
      {selectedClass && (
        <div className="fixed inset-0 z-[100] bg-gray-950/80 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[3.5rem] overflow-hidden flex flex-col shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedClass(null)}
              className="absolute top-8 right-8 p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className={`p-12 bg-gradient-to-r ${selectedClass.subjectDetails.gradient} text-white`}>
              <h2 className="text-4xl font-black uppercase tracking-tight mb-2">{selectedClass.teacher.subject}</h2>
              <p className="text-white/70 font-bold uppercase tracking-widest text-sm">Detailed Academic Roadmap • {selectedClass.grade}</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-12 space-y-12">
              <section>
                <h3 className="text-xl font-black text-gray-900 uppercase mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
                  Key Learning Topics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedClass.subjectDetails.topics.map((topic, i) => (
                    <div key={i} className="flex items-center p-4 bg-slate-50 rounded-2xl border border-gray-100 font-bold text-gray-700">
                      <CheckCircle2 className="w-5 h-5 mr-3 text-green-500" />
                      {topic}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-xl font-black text-gray-900 uppercase mb-6 flex items-center">
                  <Layout className="w-6 h-6 mr-3 text-blue-600" />
                  Semester Syllabus
                </h3>
                <div className="space-y-6">
                  {selectedClass.subjectDetails.syllabus.map((term, i) => (
                    <div key={i} className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                      <h4 className="text-lg font-black text-blue-600 uppercase mb-4">{term.term}</h4>
                      <ul className="space-y-3">
                        {term.contents.map((item, idx) => (
                          <li key={idx} className="flex items-start text-gray-500 font-medium">
                            <span className="w-2 h-2 bg-blue-300 rounded-full mt-2 mr-3 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
            <div className="p-8 border-t border-gray-100 bg-slate-50 flex justify-end">
              <button 
                onClick={() => setSelectedClass(null)}
                className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-all shadow-lg"
              >
                Close Roadmap
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Classrooms;
