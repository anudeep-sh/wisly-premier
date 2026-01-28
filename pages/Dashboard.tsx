
import React from 'react';
import { User } from '../types';
import { Calendar, Book, Clock, Bell, User as UserIcon, BookOpen, GraduationCap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const stats = [
    { label: 'Attendance', value: '94%', icon: Clock, color: 'text-green-600 bg-green-50' },
    { label: 'Assignments', value: '12/15', icon: Book, color: 'text-blue-600 bg-blue-50' },
    { label: 'GPA', value: '3.8', icon: Award, color: 'text-purple-600 bg-purple-50' },
    { label: 'Library Books', value: '3', icon: BookOpen, color: 'text-yellow-600 bg-yellow-50' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <UserIcon className="w-10 h-10 text-blue-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hello, {user.name}!</h1>
            <p className="text-gray-500 font-medium uppercase">{user.grade} • Roll No: {user.rollNumber}</p>
          </div>
        </div>
        <div className="mt-6 md:mt-0 flex space-x-3">
          <button className="p-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50">
            <Bell className="w-5 h-5" />
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg">
            View Schedule
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              Upcoming Classes
            </h2>
            <div className="space-y-4">
              {[
                { subject: 'Advanced Mathematics', teacher: 'Dr. Sarah Wilson', time: '09:00 AM - 10:30 AM' },
                { subject: 'Computer Science', teacher: 'Prof. James Chen', time: '11:00 AM - 12:30 PM' },
                { subject: 'Physics Lab', teacher: 'Dr. Robert Blake', time: '01:30 PM - 03:00 PM' },
              ].map((cls, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-50 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-700 font-bold">
                      {cls.subject[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{cls.subject}</h4>
                      <p className="text-sm text-gray-500">{cls.teacher}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-blue-600">{cls.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-600 p-8 rounded-3xl text-white">
            <h3 className="text-lg font-bold mb-4 uppercase">egurukl AI Tutor</h3>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
              Need help with your homework? Our AI-powered tutor is available 24/7 to answer your academic queries.
            </p>
            <Link to="/games" className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">
              Try Interactive Games
            </Link>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Bell className="w-5 h-5 mr-2 text-blue-600" />
              Recent Announcements
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-orange-50 border border-orange-100">
                <p className="text-xs font-bold text-orange-600 uppercase mb-1">Fee Reminder</p>
                <p className="text-sm font-medium text-gray-800">Term 2 tuition fees are due by next Friday.</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                <p className="text-xs font-bold text-blue-600 uppercase mb-1">New Event</p>
                <p className="text-sm font-medium text-gray-800">Annual Tech Fest registration is now open.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
