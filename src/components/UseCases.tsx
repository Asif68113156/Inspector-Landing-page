"use client";

export default function UseCases() {
  const cases = [
    {
      title: "Warehouse operations",
      description:
        "Warehouse operations in warehouse operations and low-shortened operations in warehouse operations.",
      svg: (
        <svg
          className="w-7 h-7 text-teal-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Warehouse Building Icon */}
          <path d="M3 21V9l9-5 9 5v12H3z" />
          <path d="M9 21v-6h6v6" />
          <path d="M7 10h2" />
          <path d="M15 10h2" />
        </svg>
      ),
    },
    {
      title: "Construction sites",
      description:
        "Construction sites export and construction sites main manufacturing facilities.",
      svg: (
        <svg
          className="w-7 h-7 text-teal-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Construction Site Crane / Excavator Structure Icon */}
          <path d="M4 21h16" />
          <path d="M6 21V4l10 8" />
          <path d="M16 12h4v4l-4-4" />
          <path d="M6 10h6" />
          <path d="M12 21l-3-6" />
        </svg>
      ),
    },
    {
      title: "Manufacturing facilities",
      description:
        "Manufacturing facilities are convenient/solutions and solutions for manufacturing facilities.",
      svg: (
        <svg
          className="w-7 h-7 text-teal-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Manufacturing Factory Icon */}
          <path d="M2 20h20" />
          <path d="M4 20V10l4 3V10l4 3V6l8 4v10" />
          <path d="M17 6h1v4h-1z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built for teams that inspect equipment every day
          </h2>
        </div>

        {/* 3 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-teal-200 transition-all group"
            >
              {/* Green Icon Box */}
              <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                {item.svg}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
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
