import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-cyan-400 to-blue-600" />
              <span className="font-semibold tracking-tight">GoAurex</span>
            </div>
            <p className="mt-2 text-sm text-white/70 max-w-md">
              Technology and strategy to help your business operate smarter, scale faster, and stay ahead in a data-driven world.
            </p>
          </div>
          <div className="text-sm text-white/60">
            <div>hello@goaurex.com</div>
            <div className="mt-1">© {new Date().getFullYear()} GoAurex. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
