
import React, { useState } from 'react';
import { Bus, MapPin, Phone, ShieldCheck, Clock, Map as MapIcon, X, Send, Loader2, CheckCircle } from 'lucide-react';
import { BusRoute } from '../types';

const BusFacilities: React.FC = () => {
  const [showRequest, setShowRequest] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const routes: BusRoute[] = [
    {
      id: '1',
      routeNumber: 'NFN-01',
      driverName: 'Suresh Kumar',
      contact: '+91 81439 00450',
      stops: ['Whitefield', 'Hope Farm', 'ITPL Gate', 'NeoFin Nex Academy']
    },
    {
      id: '2',
      routeNumber: 'NFN-02',
      driverName: 'Mohamed Ali',
      contact: '+91 81439 00450',
      stops: ['Indiranagar', 'Koramangala', 'HSR Layout', 'NeoFin Nex Academy']
    }
  ];

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setShowRequest(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-2xl text-sm font-black uppercase tracking-widest mb-6 border border-blue-100">
            <Bus className="w-4 h-4" />
            <span>NeoFin Nex Transit</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight uppercase">Smart Commute <br/><span className="text-blue-600">Safety.</span></h1>
          <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
            NeoFin Nex operates a secure bus fleet with real-time GPS tracking for all students in Hyderabad.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
            className="rounded-[4rem] shadow-2xl border-4 border-white aspect-[4/3] object-cover" 
            alt="NeoFin Nex Fleet" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {routes.map((route) => (
          <div key={route.id} className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl">
             <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-black text-gray-900">{route.routeNumber}</span>
                <Bus className="text-blue-600 w-8 h-8" />
             </div>
             <p className="text-gray-500 font-bold mb-4">Driver: {route.driverName}</p>
             <div className="space-y-2">
                {route.stops.map((stop, i) => (
                  <div key={i} className="flex items-center text-sm font-bold text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                    {stop}
                  </div>
                ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusFacilities;
