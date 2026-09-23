import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InspectPro - Forklift Inspection Checklist & Equipment Safety Platform",
  description: "Perform consistent forklift inspections, identify issues early, and keep inspection records organized with InspectPro.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

