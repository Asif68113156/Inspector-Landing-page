"use client";

import { useState } from "react";
import { ChevronDown, Menu, X, Layers } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#EAF6F6] border-b border-teal-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo: Blue Isometric Layers Icon + InspectPro Text */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Layers className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              InspectPro
            </span>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-semibold text-slate-700">
            <a
              href="#products"
              className="hover:text-slate-900 transition-colors"
            >
              Products
            </a>
            <a
              href="#solutions"
              className="hover:text-slate-900 transition-colors"
            >
              Solutions
            </a>
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-slate-900 transition-colors">
              <span>Resources</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
            </div>
            <a
              href="#pricing"
              className="hover:text-slate-900 transition-colors"
            >
              Pricing
            </a>
          </nav>

          {/* Right Navigation Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#login"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            >
              Login
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#0066FF] hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-700 text-sm">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100"
            >
              Products
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100"
            >
              Solutions
            </a>
            <a
              href="#resources"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100"
            >
              Pricing
            </a>
            <a
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2"
            >
              Login
            </a>
          </nav>

          <div className="pt-2">
            <a
              href="#get-started"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#0066FF] text-white font-semibold text-sm shadow-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
