"use client";

import { ClipboardList, SearchCheck, FileCheck2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Choose your checklist",
      description:
        "Choose your checklist to start 01 — Choose your checklist.",
    },
    {
      number: "02",
      icon: SearchCheck,
      title: "Complete the inspection",
      description:
        "Complete the inspection the inspection and complete the inspection.",
    },
    {
      number: "03",
      icon: FileCheck2,
      title: "Record and act on findings",
      description:
        "Record the process and consent and act — record and act on findings.",
    },
  ];

  return (
    <section className="bg-[#EEF7F6] py-16 lg:py-24 border-b border-teal-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
        </div>

        {/* 3 Steps Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Step Number in Green Color + Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-3xl font-extrabold text-teal-600 tracking-tight">
                      {step.number} —
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
