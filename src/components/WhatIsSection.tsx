"use client";

import { Info } from "lucide-react";

export default function WhatIsSection() {
  return (
    <section className="bg-white py-16 lg:py-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What is a Forklift Inspection Checklist?
            </h2>

            <div className="space-y-3 text-slate-600 leading-relaxed text-base">
              <p>
                Forklift Inspection Checklist helps teams perform consistent safety checks before operating equipment. Regular inspection ensures that key components like brakes, hydraulics, steering, and tires are verified for daily operational readiness.
              </p>
              <p>
                Forklift Inspection set benefits content restore safety and compliance our simplified requirement.
              </p>
            </div>
          </div>

          {/* Right Callout Banner Card */}
          <div className="lg:col-span-5">
            <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-6 relative overflow-hidden shadow-xs">
              <div className="flex gap-4 items-center">
                <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Info className="w-4 h-4" />
                </div>
                <p className="text-sm text-slate-800 leading-relaxed">
                  Key impotence are octenns is consince being regulatory requirements are ossl to <span className="font-extrabold text-slate-900">regulatory requirements</span>.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
