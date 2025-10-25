import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="font-semibold tracking-tight">GoAurex</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#why" className="hover:text-white transition">Why Us</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-2 text-sm font-medium shadow-md shadow-cyan-500/20 hover:opacity-95 transition md:flex">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
