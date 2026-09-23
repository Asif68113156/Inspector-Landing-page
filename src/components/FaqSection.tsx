"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What should be checked during a forklift inspection?",
      answer:
        "Daily inspections should cover fluid levels, tires, mast, forks, hydraulic hoses, steering, brakes, seatbelt, horn, warning lights, and safety reverse alarms.",
    },
    {
      question: "How often should a forklift be inspected?",
      answer:
        "OSHA guidelines require forklifts to be inspected at least daily before being placed into service, or after every shift in 24/7 round-the-clock operations.",
    },
    {
      question: "Can this checklist be used for daily inspections?",
      answer:
        "Yes! InspectPro is designed specifically for fast, digital or printed daily pre-operation equipment safety checklists.",
    },
    {
      question: "What should I do if I find a defect?",
      answer:
        "If a safety defect is detected, mark the item as 'Fail', lock out the vehicle, and immediately submit a maintenance ticket.",
    },
    {
      question: "Can I customize the checklist?",
      answer:
        "Absolutely. Custom inspection templates can be created to fit specialized attachments or specific site rules.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            FAQ
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-4 text-left text-slate-900 font-semibold text-sm sm:text-base hover:text-blue-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
