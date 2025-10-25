import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[72vh] md:h-[80vh] lg:h-[88vh]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Nhk4dWoYLj83rV44/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/30 to-neutral-950" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Build smarter. Scale faster. Lead with data.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">
              At GoAurex, we empower businesses with cutting-edge data, cloud, and marketing solutions. From data warehousing and ETL to multi-cloud migrations and automated email campaigns, we help you operate smarter and grow efficiently.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-white/90 transition">
                Explore Services
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-transparent border border-white/20 px-5 py-3 text-sm font-medium hover:border-white/40 transition">
                Talk to an expert
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/60">
              <span>Data Warehousing</span>
              <span className="opacity-40">•</span>
              <span>ETL & Migration</span>
              <span className="opacity-40">•</span>
              <span>AWS · Azure · GCP</span>
              <span className="opacity-40">•</span>
              <span>Automation & DevOps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
