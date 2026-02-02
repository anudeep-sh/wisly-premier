
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Shield, 
  Smartphone, 
  Users, 
  Lock, 
  RefreshCcw, 
  Scale,
  Gavel,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

const Policies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'safety' | 'privacy' | 'refund' | 'terms'>('safety');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab') as any;
    if (['safety', 'privacy', 'refund', 'terms'].includes(tab)) {
      setActiveTab(tab);
    }
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-slate-50 min-h-screen pb-20 pt-16">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-2xl text-sm font-black uppercase tracking-widest mb-6 border border-blue-100">
            <Gavel className="w-4 h-4 mr-2" />
            Compliance Center
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">NeoFin Nex <span className="text-blue-600">Policies.</span></h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            All policies are governed by NeoFin Nex India Private Limited. All rights reserved.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl">
           <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Academic Terms & Conditions</h2>
           <p className="text-gray-500 font-medium leading-relaxed mb-6">
             Enrollment at NeoFin Nex India Private Limited implies acceptance of all academic and disciplinary rules.
           </p>
           <div className="space-y-4">
              <div className="p-6 bg-slate-50 rounded-2xl border border-gray-100 font-bold text-gray-700">
                1. 75% Mandatory Attendance Policy.
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-gray-100 font-bold text-gray-700">
                2. Fee once paid is non-refundable unless duplicate deduction occurs.
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-gray-100 font-bold text-gray-700">
                3. Jurisdiction: Competent courts in Hyderabad, Telangana.
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
