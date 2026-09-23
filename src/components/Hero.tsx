"use client";

import { useState } from "react";
import { Check, AlertTriangle, MessageSquare, Shield } from "lucide-react";

export default function Hero() {
  const [items, setItems] = useState([
    { id: 1, name: "Forks and mast", checked: true, isWarning: false },
    { id: 2, name: "Tires and wheels", checked: true, isWarning: false },
    { id: 3, name: "Brakes", checked: true, isWarning: true },
    { id: 4, name: "Steering", checked: true, isWarning: false },
    { id: 5, name: "Warning devices", checked: true, isWarning: true },
    { id: 6, name: "Lights", checked: true, isWarning: false },
  ]);

  const toggleItem = (id: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#EAF6F6]">
      
      {/* Container divided into Left Light Area and Right Dark Teal Panel */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
        
        {/* Hero Left Content */}
        <div className="lg:w-7/12 py-12 lg:py-20 px-4 sm:px-6 lg:pl-8 lg:pr-12 space-y-6">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span>FORKLIFT SAFETY</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Forklift Inspection Checklist
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            This checklist helps you teams perform consistent inspections and identify issues befoes before their equipment is used.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#what-is-included"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-600/30 transition-all text-base"
            >
              Get the Checklist
            </a>

            <a
              href="#what-is-included"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold transition-all text-base shadow-2xs"
            >
              See What&apos;s Included
            </a>
          </div>

          {/* Sub-label under buttons */}
          <p className="text-xs text-slate-500 font-medium pt-1">
            Ready-to-use checklist for daily forklift inspections
          </p>
        </div>

        {/* Hero Right Dark Teal Panel Area */}
        <div className="lg:w-5/12 bg-[#004B54] relative min-h-[460px] flex items-center justify-center p-6 lg:p-8">
          
          {/* Layer 2: Outer Translucent Light Frame Backdrop */}
          <div className="relative z-10 w-full max-w-md lg:-ml-24 bg-white/20 backdrop-blur-md p-3 sm:p-4 rounded-3xl border border-white/30 shadow-2xl">
            
            {/* Layer 3: Inner White Inspection Checklist Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-100 space-y-4">
              
              {/* Header */}
              <div className="pb-3 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900">
                  Inspection Checklist
                </h3>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className="flex items-center justify-between py-1 px-1.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer select-none"
                  >
                    {/* Left: Checkbox at starting position + Item Name */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                          item.checked
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "bg-white border-slate-300"
                        }`}
                      >
                        {item.checked && (
                          <svg
                            className="w-3 h-3 fill-current stroke-current"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M3.5 6L5 7.5L8.5 4"
                              fill="none"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        {item.name}
                      </span>
                    </div>

                    {/* Right: Circular Badge + NA Pill Badge (Yellow for Warning, Gray for Normal) + Message Icon */}
                    <div className="flex items-center gap-2">
                      {item.isWarning ? (
                        <>
                          {/* Yellow Circular Warning Badge */}
                          <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center shadow-2xs">
                            <AlertTriangle className="w-3 h-3 text-amber-600 fill-amber-400 stroke-[2.5]" />
                          </div>

                          {/* Yellow NA Pill Badge */}
                          <div className="bg-amber-100 text-amber-800 border border-amber-200 px-2 py-0.5 rounded text-[11px] font-bold">
                            NA
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Green Circular Check Badge */}
                          <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center shadow-2xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>

                          {/* Light Gray NA Pill Badge */}
                          <div className="bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded text-[11px] font-semibold">
                            NA
                          </div>
                        </>
                      )}

                      {/* Message Bubble Icon */}
                      <MessageSquare className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Bar Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <div className="w-3/5 bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full w-3/5"></div>
                </div>
                <span className="text-blue-600 font-bold">6/10 completed</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
