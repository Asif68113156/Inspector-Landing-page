"use client";

export default function CtaBanner() {
  return (
    <section className="bg-[#00263E] py-16 lg:py-20 relative overflow-hidden text-white">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to simplify your forklift inspections?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Start with a structured checklist your team can use with consistency and ease.
          </p>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            {/* White Primary Button */}
            <a
              href="#what-is-included"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-bold transition-all shadow-lg text-base"
            >
              Get the Checklist
            </a>

            {/* Underlined Text Link */}
            <a
              href="#contact"
              className="text-white hover:text-slate-200 font-semibold underline underline-offset-4 text-base transition-colors"
            >
              Talk to our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
