"use client";

export default function TrustBanner() {
  return (
    <section className="bg-[#EAF6F6] py-10 pb-16 border-b border-teal-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        
        <p className="text-center text-xs font-bold tracking-widest text-slate-500 uppercase mb-8">
          Trusted by teams that need consistent inspections
        </p>

        {/* Logos Flex Container */}
        <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-8 opacity-90">
          
          {/* 1. Apex Logistics */}
          <div className="flex items-center gap-2.5 text-slate-900 group cursor-default">
            <svg
              className="w-7 h-7 text-slate-900 shrink-0"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Stylized Apex Triangle logo */}
              <path d="M4 26L16 6L28 26H22L16 14L10 26H4Z" fill="currentColor" stroke="none" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-base tracking-tight text-slate-900">
                Apex
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-600">
                Logistics
              </span>
            </div>
          </div>

          {/* 2. Sterling Manufacturing */}
          <div className="flex items-center gap-2.5 text-slate-900 group cursor-default">
            <svg
              className="w-7 h-7 text-slate-900 shrink-0"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Stylized Sterling 'S' Monogram Ribbon Badge */}
              <rect x="3" y="3" width="26" height="26" rx="5" stroke="currentColor" strokeWidth="2.5" />
              <path d="M21 11.5C21 9.5 19 8 16 8C13 8 11 9.5 11 11.5C11 14 21 13.5 21 16.5C21 19 18.5 20.5 16 20.5C12.5 20.5 10.5 18.5 10.5 16.5" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-base tracking-tight text-slate-900">
                Sterling
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-600">
                Manufacturing
              </span>
            </div>
          </div>

          {/* 3. BuildRight Construction */}
          <div className="flex items-center gap-2.5 text-slate-900 group cursor-default">
            <svg
              className="w-7 h-7 text-slate-900 shrink-0"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              {/* 3 Bar Chart Columns */}
              <rect x="5" y="18" width="5" height="10" rx="1" />
              <rect x="13.5" y="12" width="5" height="16" rx="1" />
              <rect x="22" y="6" width="5" height="22" rx="1" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-base tracking-tight text-slate-900">
                BuildRight
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-600">
                Construction
              </span>
            </div>
          </div>

          {/* 4. Global Warehousing Solutions */}
          <div className="flex items-center gap-2.5 text-slate-900 group cursor-default">
            <svg
              className="w-7 h-7 text-slate-900 shrink-0"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {/* Globe Icon */}
              <circle cx="16" cy="16" r="11" />
              <path d="M5 16h22" />
              <path d="M16 5c3 3.5 4.5 7.5 4.5 11s-1.5 7.5-4.5 11c-3-3.5-4.5-7.5-4.5-11s1.5-7.5 4.5-11z" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-sm tracking-tight text-slate-900">
                Global
              </span>
              <span className="text-[10px] font-semibold tracking-tight text-slate-600 leading-none">
                Warehousing Solutions
              </span>
            </div>
          </div>

          {/* 5. Prime Distribution */}
          <div className="flex items-center gap-2.5 text-slate-900 group cursor-default">
            <svg
              className="w-7 h-7 text-slate-900 shrink-0"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              {/* Isometric Box / Ribbon Logo */}
              <path d="M16 4L27 10V22L16 28L5 22V10L16 4Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <path d="M16 4V16L27 22" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M16 16L5 22" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-base tracking-tight text-slate-900">
                Prime
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-600">
                Distribution
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
