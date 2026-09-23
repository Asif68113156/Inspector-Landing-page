"use client";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Standardize inspections",
      description:
        "Ensure every shift follows exact equipment safety guidelines with standard checklists across all operators.",
      svg: (
        <svg
          className="w-6 h-6 text-teal-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Clipboard / Standardize Document Icon */}
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M9 9h6" />
          <path d="M9 13h6" />
          <path d="M9 17h4" />
        </svg>
      ),
    },
    {
      title: "Identify issues early",
      description:
        "Catch wear, tear, and mechanical issues before they cause costly downtime or workplace hazards.",
      svg: (
        <svg
          className="w-6 h-6 text-teal-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Warning Triangle Icon */}
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
    {
      title: "Keep inspection records organized",
      description:
        "Automatically store, search, and audit past equipment logs in one centralized cloud platform.",
      svg: (
        <svg
          className="w-6 h-6 text-teal-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Organized Records Folder / Document Stack Icon */}
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      title: "Give teams a simple process to follow",
      description:
        "Empower warehouse and site workers with intuitive mobile-friendly checklists requiring minimal training.",
      svg: (
        <svg
          className="w-6 h-6 text-teal-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* 4 Square Grid Icon */}
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Make every forklift inspection consistent
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Make sure forklift assessment is consistent and inspections prevent downtime for equipment teams.
          </p>
        </div>

        {/* 4 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-200 transition-all group"
            >
              {/* Custom Thin Line Green SVG Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-teal-50/80 border border-teal-100 flex items-center justify-center mb-5 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                {item.svg}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
