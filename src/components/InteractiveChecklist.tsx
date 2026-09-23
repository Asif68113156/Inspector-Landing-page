"use client";

import { useState } from "react";
import { Check, AlertTriangle } from "lucide-react";

interface Item {
  id: string;
  title: string;
  desc: string;
  status: "pass" | "fail" | "na";
  note: string;
  warningText?: string;
  isYellowFail?: boolean; // Items 2, 4, 5 use yellow Fail styling
}

export default function InteractiveChecklist() {
  const [items, setItems] = useState<Item[]>([
    {
      id: "1",
      title: "Forks and mast",
      desc: "Description or sensor of Forks and mast.",
      status: "pass",
      note: "Add a open note (optional)",
      isYellowFail: false,
    },
    {
      id: "2",
      title: "Tires and wheels",
      desc: "Description or amount of Tires and wheels.",
      status: "fail", // Row 2: Light Yellow Fail
      note: "Use note here...",
      isYellowFail: true,
    },
    {
      id: "3",
      title: "Brakes",
      desc: "Description or direction and areas brakes.",
      status: "pass", // Row 3: Active Pass in Dark Blue
      note: "",
      warningText: "Head need maintenance",
      isYellowFail: false,
    },
    {
      id: "4",
      title: "Steering",
      desc: "Description or steering materials or steering.",
      status: "fail", // Row 4: Light Yellow Fail
      note: "Bec note here...",
      isYellowFail: true,
    },
    {
      id: "5",
      title: "Warning devices",
      desc: "Description of alarm of warning devices.",
      status: "fail", // Row 5: Light Yellow Fail
      note: "",
      warningText: "Need a maintenance",
      isYellowFail: true,
    },
  ]);

  const setItemStatus = (id: string, status: "pass" | "fail" | "na") => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
  };

  const setItemNote = (id: string, note: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, note } : item))
    );
  };

  return (
    <section id="what-is-included" className="bg-[#EEF7F6]/50 py-16 lg:py-24 border-b border-teal-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-center mb-12">
          What&apos;s included in the checklist?
        </h2>

        {/* Card Container */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-4 sm:p-8 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-3.5 px-3 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors rounded-xl"
            >
              {/* Left Column: Checkbox + Title + Description */}
              <div className="flex items-start gap-3.5 md:w-5/12">
                <input
                  type="checkbox"
                  checked={item.status === "pass"}
                  onChange={() =>
                    setItemStatus(item.id, item.status === "pass" ? "na" : "pass")
                  }
                  className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
                />
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Middle Column: Pass / Fail / NA Button Group */}
              <div className="flex items-center gap-2 md:w-3/12 justify-start md:justify-center">
                {/* Pass Button: Active Dark Blue, Inactive Light Green */}
                <button
                  onClick={() => setItemStatus(item.id, "pass")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    item.status === "pass"
                      ? "bg-blue-600 text-white border border-blue-600 shadow-sm"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100"
                  }`}
                >
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  Pass
                </button>

                {/* Fail Button: Light Yellow for Items 2,4,5 / Light Red for others */}
                <button
                  onClick={() => setItemStatus(item.id, "fail")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    item.isYellowFail
                      ? item.status === "fail"
                        ? "bg-amber-400 text-amber-950 border border-amber-400 shadow-sm"
                        : "bg-amber-50 text-amber-800 border border-amber-200/80 hover:bg-amber-100"
                      : item.status === "fail"
                      ? "bg-red-500 text-white border border-red-500 shadow-sm"
                      : "bg-red-50 text-red-700 border border-red-200/80 hover:bg-red-100"
                  }`}
                >
                  <span className={`text-[11px] font-extrabold ${item.isYellowFail ? "text-amber-700" : ""}`}>▲</span>
                  Fail
                </button>

                {/* NA Button */}
                <button
                  onClick={() => setItemStatus(item.id, "na")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    item.status === "na"
                      ? "bg-amber-400 text-slate-900 border border-amber-400 shadow-sm"
                      : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  NA
                </button>
              </div>

              {/* Right Column: Note Input + Yellow Warning Label */}
              <div className="md:w-4/12 space-y-1">
                <input
                  type="text"
                  value={item.note}
                  onChange={(e) => setItemNote(item.id, e.target.value)}
                  placeholder="Note (optional)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />

                {item.warningText && (
                  <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold pt-0.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 fill-amber-400 shrink-0" />
                    <span>{item.warningText}</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
