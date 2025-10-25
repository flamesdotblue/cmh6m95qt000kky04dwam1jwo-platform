import React from 'react';
import { Database, Cloud, Mail, BarChart3, Shield, Rocket } from 'lucide-react';

const Card = ({ icon: Icon, title, description, points, accent }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-neutral-900/40 p-6 shadow-xl shadow-black/20 transition hover:border-white/20">
    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br ${accent}`} />
    <div className="relative z-10">
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-white/5 p-2">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Rocket className="h-3.5 w-3.5" />
            Solutions designed for growth
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">What we do</h2>
          <p className="max-w-2xl text-sm sm:text-base text-white/70">
            We combine technology and strategy to optimize your data foundation, modernize your cloud, and accelerate customer acquisition with data-driven marketing.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <Card
            icon={Database}
            title="Data Solutions"
            description="Manage, integrate, and optimize data to unlock insights and efficiency."
            points={[
              'Data warehousing (Snowflake, BigQuery, Redshift)',
              'ETL/ELT pipelines and orchestration',
              'Data migration and quality management',
              'Performance tuning and database optimization',
            ]}
            accent="from-cyan-500/10 via-blue-500/10 to-transparent"
          />

          <Card
            icon={Cloud}
            title="Cloud Solutions"
            description="Scalable infrastructure across AWS, Azure, and GCP with robust DevOps."
            points={[
              'Cloud architecture & cost optimization',
              'Seamless cloud migrations',
              'DevOps CI/CD and infrastructure as code',
              'Security hardening and compliance',
            ]}
            accent="from-blue-500/10 via-indigo-500/10 to-transparent"
          />

          <Card
            icon={Mail}
            title="Email Marketing"
            description="Strategic, automated campaigns that engage and convert."
            points={[
              'Lifecycle & drip campaigns',
              'Segmentation and personalization',
              'A/B testing and deliverability',
              'Attribution and ROI analytics',
            ]}
            accent="from-emerald-500/10 via-cyan-500/10 to-transparent"
          />

          <Card
            icon={BarChart3}
            title="Data Visualization"
            description="Interactive dashboards that power real-time decisions."
            points={[
              'Executive and operational dashboards',
              'Embedded analytics and self-serve BI',
              'KPI design & metric governance',
              'Modern BI stack implementation',
            ]}
            accent="from-purple-500/10 via-fuchsia-500/10 to-transparent"
          />
        </div>

        <div id="why" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
            <h3 className="font-semibold">Security-first</h3>
            <p className="mt-2 text-sm text-white/70">Enterprise-grade security, encryption, and governance across your data and cloud footprint.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/60"><Shield className="h-4 w-4" /> Compliance-ready practices</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
            <h3 className="font-semibold">Performance & scale</h3>
            <p className="mt-2 text-sm text-white/70">Architectures that grow with you, with a focus on reliability and cost efficiency.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/60"><Cloud className="h-4 w-4" /> Multi-cloud expertise</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
            <h3 className="font-semibold">Outcomes, not outputs</h3>
            <p className="mt-2 text-sm text-white/70">We align solutions to business goals, measurable KPIs, and meaningful ROI.</p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/60"><BarChart3 className="h-4 w-4" /> KPI-driven delivery</div>
          </div>
        </div>

        <div id="contact" className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-semibold">Ready to accelerate your data-driven growth?</h3>
            <p className="mt-2 text-sm sm:text-base text-white/70">Tell us about your goals. We’ll craft a roadmap across data, cloud, and marketing to get you there.</p>
          </div>
          <div className="flex gap-3">
            <a href="mailto:hello@goaurex.com" className="flex-1 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium shadow-md shadow-cyan-500/20 hover:opacity-95 transition">Email us</a>
            <a href="#home" className="flex-1 inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-medium hover:border-white/40 transition">Book intro</a>
          </div>
        </div>
      </div>
    </section>
  );
}
