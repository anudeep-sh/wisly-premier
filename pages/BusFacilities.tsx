
import React from 'react';
import { Bus, MapPin, Phone, ShieldCheck, Clock, Map as MapIcon } from 'lucide-react';
import { BusRoute } from '../types';

const BusFacilities: React.FC = () => {
  const routes: BusRoute[] = [
    {
      id: '1',
      routeNumber: 'WIS-01',
      driverName: 'Suresh Kumar',
      contact: '+91 98765 43210',
      stops: ['Whitefield', 'Hope Farm', 'ITPL Gate', 'School Campus']
    },
    {
      id: '2',
      routeNumber: 'WIS-02',
      driverName: 'Mohamed Ali',
      contact: '+91 98765 43211',
      stops: ['Indiranagar', 'Koramangala', 'HSR Layout', 'School Campus']
    },
    {
      id: '3',
      routeNumber: 'WIS-03',
      driverName: 'Rajesh Singh',
      contact: '+91 98765 43212',
      stops: ['MG Road', 'Ulsoor', 'Frazer Town', 'School Campus']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Safe & Reliable Transport</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our state-of-the-art bus fleet is equipped with real-time GPS tracking and CCTV cameras to ensure the safest commute for your child.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">GPS Tracked</h4>
                <p className="text-sm text-gray-500">Real-time location on parent app</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Punctuality</h4>
                <p className="text-sm text-gray-500">98% on-time arrival rate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src="https://picsum.photos/seed/schoolbus/800/500" className="rounded-3xl shadow-2xl" alt="School Bus" />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Active Transport Routes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {routes.map((route) => (
          <div key={route.id} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
            <div className="flex items-center justify-between mb-8">
              <div className="bg-blue-50 p-4 rounded-2xl">
                <Bus className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-lg font-bold text-gray-900">{route.routeNumber}</span>
            </div>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <h4 className="font-bold text-gray-900">Stops:</h4>
              </div>
              <div className="ml-8 space-y-2">
                {route.stops.map((stop, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></div>
                    {stop}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-50 pt-8 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Driver</p>
                <p className="font-bold text-gray-900">{route.driverName}</p>
              </div>
              <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md">
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
        <div className="absolute right-0 top-0 opacity-10">
          <MapIcon className="w-96 h-96 -mr-20 -mt-20" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Need a New Stop?</h2>
          <p className="text-xl text-gray-400 mb-8">
            We are constantly expanding our routes. If your location is not covered, request a new route via the transport desk.
          </p>
          <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl">
            Request Transport Facility
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusFacilities;
