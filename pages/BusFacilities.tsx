
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
      routeNumber: 'WIS-01',
      driverName: 'Suresh Kumar',
      contact: '+91 81439 00450',
      stops: ['Whitefield', 'Hope Farm', 'ITPL Gate', 'WISLY Academy']
    },
    {
      id: '2',
      routeNumber: 'WIS-02',
      driverName: 'Mohamed Ali',
      contact: '+91 81439 00450',
      stops: ['Indiranagar', 'Koramangala', 'HSR Layout', 'WISLY Academy']
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
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-2xl text-sm font-black uppercase tracking-widest mb-6 border border-blue-100">
            <Bus className="w-4 h-4" />
            <span>WISLY Transit</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight uppercase leading-tight">Smart Commute <br/><span className="text-blue-600">Safety.</span></h1>
          <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
            WISLY operates a secure, GPS-enabled bus fleet ensuring every student's journey is monitored and safe across Hyderabad.
          </p>
          <button 
            onClick={() => setShowRequest(true)}
            className="px-10 py-5 bg-blue-600 text-white rounded-[2rem] font-black text-lg hover:bg-gray-900 transition-all shadow-2xl shadow-blue-200 active:scale-95"
          >
            Inquire About Routes
          </button>
        </div>
        <div className="lg:w-1/2">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop" 
              className="rounded-[4rem] shadow-2xl border-4 border-white aspect-[4/3] object-cover" 
              alt="WISLY Fleet" 
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-black text-gray-900 uppercase text-sm">GPS Tracking</p>
                  <p className="text-xs text-gray-400 font-bold uppercase">Live 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {routes.map((route) => (
          <div key={route.id} className="group bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl hover:border-blue-200 transition-all duration-500">
             <div className="flex justify-between items-center mb-8">
                <div>
                  <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">Route ID</span>
                  <span className="text-3xl font-black text-gray-900">{route.routeNumber}</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-2xl group-hover:rotate-12 transition-transform">
                  <MapIcon className="text-blue-600 w-8 h-8" />
                </div>
             </div>
             
             <div className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl mb-8 border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-black text-gray-900">{route.driverName}</p>
                  <p className="text-xs text-gray-400 font-bold">{route.contact}</p>
                </div>
             </div>

             <div className="space-y-4 relative pl-6">
                <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-blue-100" />
                {route.stops.map((stop, i) => (
                  <div key={i} className="flex items-center text-sm font-bold text-gray-500 relative">
                    <div className="absolute -left-[1.35rem] w-3 h-3 rounded-full bg-white border-2 border-blue-500" />
                    {stop}
                  </div>
                ))}
             </div>
          </div>
        ))}
      </div>

      {/* Request Modal */}
      {showRequest && (
        <div className="fixed inset-0 z-[100] bg-gray-950/80 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xl rounded-[3.5rem] p-12 shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setShowRequest(false)}
              className="absolute top-8 right-8 p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {isSuccess ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 uppercase mb-4">Inquiry Received</h2>
                <p className="text-gray-500 font-medium">Our transport coordinator will contact you shortly with route feasibility.</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-black text-gray-900 uppercase mb-8">Route Inquiry.</h2>
                <form onSubmit={handleRequest} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Student Area / Locality</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none font-bold"
                      placeholder="e.g., Gachibowli, Madhapur..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Contact Phone</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none font-bold"
                      placeholder="+91..."
                    />
                  </div>
                  <button
                    disabled={isSending}
                    type="submit"
                    className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-xl hover:bg-gray-900 transition-all flex items-center justify-center space-x-3 shadow-2xl active:scale-95 disabled:opacity-50"
                  >
                    {isSending ? <Loader2 className="animate-spin w-6 h-6" /> : <><Send className="w-5 h-5" /> <span>Request Feasibility</span></>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BusFacilities;
