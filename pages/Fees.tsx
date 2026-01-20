
import React, { useState } from 'react';
import { CreditCard, Receipt, ShieldCheck, CheckCircle2, AlertCircle, Smartphone, Globe, Landmark, IndianRupee } from 'lucide-react';
import { FeeStructure } from '../types';

const Fees: React.FC = () => {
  const [paymentStep, setPaymentStep] = useState(0); // 0: Details, 1: Gateway, 2: Success
  const [method, setMethod] = useState<'upi' | 'card' | 'net'>('upi');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustomMode, setIsCustomMode] = useState(false);

  const fees: FeeStructure[] = [
    { grade: 'Grade 9', tuition: 45000, transport: 12000, lab: 5000, total: 62000 },
    { grade: 'Grade 10', tuition: 45000, transport: 12000, lab: 5000, total: 62000 },
    { grade: 'Grade 11', tuition: 55000, transport: 12000, lab: 8000, total: 75000 },
    { grade: 'Grade 12', tuition: 55000, transport: 12000, lab: 8000, total: 75000 },
  ];

  const handlePayment = () => {
    if (isCustomMode && (!customAmount || isNaN(Number(customAmount)) || Number(customAmount) <= 0)) {
      alert("Please enter a valid amount");
      return;
    }
    setPaymentStep(1);
    setTimeout(() => setPaymentStep(2), 2500);
  };

  const currentPayable = isCustomMode ? Number(customAmount) || 0 : 26500;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">School Fee Management</h1>
        <p className="text-lg text-gray-600">Secure Indian payment gateways with instant receipt generation.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-8 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Receipt className="w-6 h-6 mr-2 text-blue-600" />
                Annual Fee Schedule (INR)
              </h2>
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">Academic Year 2024-25</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-gray-500 uppercase text-xs font-bold">
                  <tr>
                    <th className="px-8 py-4">Grade</th>
                    <th className="px-8 py-4 text-right">Tuition Fee</th>
                    <th className="px-8 py-4 text-right">Bus/Transport</th>
                    <th className="px-8 py-4 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {fees.map((f, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-5 font-bold text-gray-900">{f.grade}</td>
                      <td className="px-8 py-5 text-right text-gray-600">₹{f.tuition.toLocaleString()}</td>
                      <td className="px-8 py-5 text-right text-gray-600">₹{f.transport.toLocaleString()}</td>
                      <td className="px-8 py-5 text-right font-bold text-blue-600 text-lg">₹{f.total.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-orange-900">Important Instructions</h3>
              <p className="text-orange-700 text-sm mt-1">
                Fees paid online are non-refundable except in case of technical double-deduction. Please do not close the window while the UPI transaction is being processed.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-8 sticky top-24">
            {paymentStep === 0 && (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-4">WISLY Secure Checkout</h3>
                
                <div className="flex mb-6 bg-gray-100 p-1 rounded-xl">
                  <button 
                    onClick={() => setIsCustomMode(false)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${!isCustomMode ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Standard Installment
                  </button>
                  <button 
                    onClick={() => setIsCustomMode(true)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${isCustomMode ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Custom Amount
                  </button>
                </div>

                <div className="space-y-4 mb-8">
                  {isCustomMode ? (
                    <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                      <label className="text-xs font-bold text-blue-600 uppercase mb-2 block">Enter Customer Amount (INR)</label>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
                        <input 
                          type="number"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder="e.g. 5000"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-blue-200 focus:ring-4 focus:ring-blue-100 outline-none font-bold text-gray-900"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex justify-between text-gray-600 text-sm mb-1">
                        <span>Tuition (Term 2)</span>
                        <span className="font-bold">₹22,500</span>
                      </div>
                      <div className="flex justify-between text-gray-600 text-sm">
                        <span>Transport Charge</span>
                        <span className="font-bold">₹4,000</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="px-2 flex justify-between text-xl font-bold text-gray-900">
                    <span>Total Payable</span>
                    <span className="text-blue-600">₹{currentPayable.toLocaleString()}</span>
                  </div>

                  <div className="space-y-2 mt-6">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Payment Method</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button 
                        onClick={() => setMethod('upi')}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all ${method === 'upi' ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
                      >
                        <Smartphone className="w-5 h-5 mb-1" />
                        <span className="text-[10px] font-bold">UPI/GPay</span>
                      </button>
                      <button 
                        onClick={() => setMethod('card')}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all ${method === 'card' ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
                      >
                        <CreditCard className="w-5 h-5 mb-1" />
                        <span className="text-[10px] font-bold">Card</span>
                      </button>
                      <button 
                        onClick={() => setMethod('net')}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center transition-all ${method === 'net' ? 'border-blue-500 bg-blue-50 text-blue-600' : 'border-gray-100 text-gray-400 hover:border-gray-200'}`}
                      >
                        <Landmark className="w-5 h-5 mb-1" />
                        <span className="text-[10px] font-bold">Netbank</span>
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-100"
                >
                  <Globe className="w-5 h-5" />
                  <span>Secure Pay Now</span>
                </button>
                <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                  <span>Verified by WISLY Security Systems</span>
                </div>
              </>
            )}

            {paymentStep === 1 && (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 border-4 border-blue-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Awaiting UPI Confirmation</h3>
                <p className="text-gray-500 mt-2 text-center text-sm">Please check your mobile app and enter your PIN to complete the transaction.</p>
              </div>
            )}

            {paymentStep === 2 && (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 scale-in">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Transaction Successful</h3>
                <p className="text-center text-gray-500 mt-2 mb-8 text-sm">
                  Fee ID: <span className="font-mono text-gray-900">WISLY_PAY_8829</span><br/>
                  A receipt for ₹{currentPayable.toLocaleString()} has been sent to your registered email.
                </p>
                <button
                  onClick={() => {setPaymentStep(0); setCustomAmount('');}}
                  className="w-full py-4 bg-slate-100 text-gray-700 rounded-2xl font-bold hover:bg-slate-200 transition-colors"
                >
                  Return to Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
