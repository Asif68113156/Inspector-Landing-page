"use client";

import { Layers } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#001E2E] text-slate-400 py-14 lg:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Brand Column + 4 Nav Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
                <Layers className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                InspectPro
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              InspectPro is a fictitious company created for demonstration purposes as a fictional SaaS company.
            </p>
          </div>

          {/* Product Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#templates" className="hover:text-white transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#by-industry" className="hover:text-white transition-colors">
                  by Industry
                </a>
              </li>
              <li>
                <a href="#by-function" className="hover:text-white transition-colors">
                  by Function
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 tracking-wider uppercase">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#help-center" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#api" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-3">
            <span>InspectPro</span>
            <span>·</span>
            <span>Standards</span>
            <span>·</span>
            <span>Templates</span>
          </div>
          <p>© Copyright 2023</p>
        </div>

      </div>
    </footer>
  );
}
