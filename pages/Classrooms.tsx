
import React from 'react';
import { Classroom } from '../types';
import { BookOpen, Users, User, Star, CheckCircle2 } from 'lucide-react';

interface ExtendedClassroom extends Classroom {
  subjectDetails: {
    description: string;
    topics: string[];
    bannerImage: string;
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
        subject: 'English & Literature',
        qualification: 'M.A., B.Ed',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400'
      },
      subjectDetails: {
        bannerImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop',
        description: "Focuses on developing critical thinking through classical literature and advanced linguistics.",
        topics: ["Shakespearean Drama", "Poetic Analysis", "Persuasive Writing", "Grammar & Syntax"]
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
        bannerImage: 'https://images.unsplash.com/photo-1509228468518-180dd48219d8?q=80&w=2070&auto=format&fit=crop',
        description: "A deep dive into logic, spatial reasoning, and the language of the universe.",
        topics: ["Trigonometric Ratios", "Polynomial Equations", "Differential Calculus", "Probability Theory"]
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
        bannerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        description: "Exploring the fundamental laws of nature, energy, and mechanical systems.",
        topics: ["Quantum Mechanics Intro", "Electromagnetism", "Optics & Photonics", "Thermodynamics"]
      }
    },
    {
      id: '4',
      grade: 'Grade 12',
      section: 'Science',
      strength: 25,
      teacher: {
        id: 't4',
        name: 'Mr. Johnathan Smith',
        subject: 'Chemistry',
        qualification: 'M.Sc, Chemistry',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400'
      },
      subjectDetails: {
        bannerImage: 'https://images.unsplash.com/photo-1532187875620-196ad0ea40f3?q=80&w=2070&auto=format&fit=crop',
        description: "The study of matter, its properties, and how different substances interact.",
        topics: ["Organic Synthesis", "Chemical Kinetics", "Electrochemistry", "Molecular Geometry"]
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Classrooms & Subject Details</h1>
        <p className="text-xl text-gray-600">Explore the academic core of WISLY Private Limited.</p>
      </div>

      <div className="grid grid-cols-1 gap-16">
        {classrooms.map((cls) => (
          <div key={cls.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-xl transition-all">
            <div className="h-48 w-full relative overflow-hidden">
               <img src={cls.subjectDetails.bannerImage} className="w-full h-full object-cover opacity-60" alt="subject banner" />
               <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent"></div>
               <div className="absolute bottom-6 left-10">
                  <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {cls.grade}
                  </span>
               </div>
            </div>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 p-10 flex flex-col items-center border-r border-gray-50">
                <div className="relative mb-4">
                  <img src={cls.teacher.image} alt={cls.teacher.name} className="w-32 h-32 rounded-3xl object-cover shadow-lg" />
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-xl shadow-md">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 text-center">{cls.teacher.name}</h4>
                <p className="text-xs text-blue-600 font-bold uppercase mt-1">{cls.teacher.qualification}</p>
              </div>

              <div className="md:w-3/4 p-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{cls.teacher.subject}</h3>
                    <p className="text-gray-500 font-medium">Class Section: <span className="text-gray-900 font-bold">{cls.section}</span></p>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center text-sm font-medium text-gray-500 bg-blue-50 px-4 py-2 rounded-xl">
                    <Users className="w-5 h-5 mr-2 text-blue-500" />
                    <span>{cls.strength} Active Students</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6 border-y border-gray-50">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Subject Overview
                    </h4>
                    <p className="text-gray-600 leading-relaxed italic">
                      "{cls.subjectDetails.description}"
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Key Topics
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {cls.subjectDetails.topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-center space-x-2 text-sm text-gray-700 bg-gray-50 p-2 rounded-lg border border-gray-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <div className="flex space-x-3">
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Access Curriculum
                    </button>
                    <button className="p-3 bg-white rounded-xl text-gray-400 hover:text-blue-600 transition-colors border border-gray-100 hover:border-blue-100">
                      <User className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classrooms;
