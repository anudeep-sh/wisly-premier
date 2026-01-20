
import React, { useState } from 'react';
import { User as UserType } from '../types';
import { User as UserIcon, Phone, MapPin, Mail, Award, Save, CheckCircle } from 'lucide-react';

interface ProfileProps {
  user: UserType;
  onUpdate: (updatedUser: UserType) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    phoneNumber: user.phoneNumber || '',
    address: user.address || '',
    grade: user.grade || ''
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      ...formData
    };
    onUpdate(updatedUser);
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-blue-600 h-32 relative">
          <div className="absolute -bottom-12 left-12">
            <div className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center border-4 border-white">
              <UserIcon className="w-12 h-12 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="pt-16 pb-12 px-12">
          <div className="flex justify-between items-start mb-10">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-500 font-medium">Roll Number: {user.rollNumber} • {user.grade}</p>
            </div>
            {!isEditing && (
              <button 
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors"
              >
                Edit Details
              </button>
            )}
          </div>

          {saved && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl flex items-center space-x-2 animate-in fade-in zoom-in">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Student details updated successfully!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="group">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Email Address</label>
                <div className="flex items-center space-x-3 text-gray-700 bg-gray-50 p-4 rounded-2xl border border-transparent group-focus-within:border-blue-200 transition-all">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">{user.email}</span>
                </div>
              </div>

              <div className="group">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    disabled={!isEditing}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all disabled:bg-gray-50 disabled:text-gray-500 font-medium"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                    placeholder="Add student phone number"
                  />
                </div>
              </div>

              <div className="group">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Classroom / Grade</label>
                <div className="flex items-center space-x-3 text-gray-700 bg-gray-50 p-4 rounded-2xl border border-transparent transition-all">
                  <Award className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">{user.grade}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Residential Address</label>
                <div className="relative h-full">
                  <MapPin className="absolute left-4 top-5 w-5 h-5 text-gray-400" />
                  <textarea
                    disabled={!isEditing}
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all disabled:bg-gray-50 disabled:text-gray-500 font-medium resize-none"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="Enter full home address for bus routing"
                  />
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="md:col-span-2 flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-8 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center space-x-2"
                >
                  <Save className="w-5 h-5" />
                  <span>Update Profile</span>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
