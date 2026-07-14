// app/page.tsx
import Link from "next/link";
import Image from "next/image";

const publications = [
  {
    year: "2022",
    title:
      "Computer-Aided Detection Improves Adenomas per Colonoscopy for Screening and Surveillance Colonoscopy: A Randomized Trial",
    venue: "ScienceDirect",
    href: "https://www.sciencedirect.com/",
    note: "Randomized trial; operational and analytical contribution.",
  },
  {
    year: "2020",
    title:
      "Adherence to Ideal Cardiovascular Health Metrics Is Associated With Reduced Odds of Hepatic Steatosis",
    venue: "Wiley Online Library",
    href: "https://aasldpubs.onlinelibrary.wiley.com/",
    note: "Population health analysis; co-author contribution.",
  },
];

const pillars = [
  {
    title: "Trial Execution & Governance",
    desc: "End-to-end operational leadership from startup to closeout, with clear ownership, cadence, and escalation paths.",
  },
  {
    title: "Regulatory & Inspection Readiness",
    desc: "GCP-aligned documentation, IRB workflows, delegation-of-authority rigor, and audit-ready trial master file practices.",
  },
  {
    title: "Enrollment & Site Performance",
    desc: "Screening funnel optimization, site enablement, participant-centered burden reduction, and measurable performance gates.",
  },
  {
    title: "Vendors, Budgets & Control",
    desc: "SOW/KPI management, vendor oversight, issue triage, and cost-to-complete discipline in resource-constrained environments.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-semibold tracking-tight">Jean Mendez, MD</div>
          <nav className="hidden gap-6 text-sm text-zinc-700 md:flex">
            <a href="#about" className="hover:text-zinc-950">About</a>
            <a href="#impact" className="hover:text-zinc-950">Leadership & Impact</a>
            <a href="#publications" className="hover:text-zinc-950">Publications</a>
            <a href="#contact" className="hover:text-zinc-950">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm hover:border-zinc-400"
              href="#contact"
            >
              Contact
            </Link>
            <a
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-white hover:bg-zinc-800"
              href="/Jean-Mendez-CV.pdf"
            >
              Download CV
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <p className="text-sm font-medium text-zinc-600">Clinical Operations & Development</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              Clinical trial execution, built for speed and control.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-700">I lead inspection-ready clinical trial operations and translate clinical strategy into measurable execution. With a proven track record of leadership and operational expertise spanning biotech, industry-sponsored clinical development, and academic and VA research programs, I drive cross-functional execution, operational excellence, and GCP-compliant trial delivery.
              
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                href="#impact"
              >
                View leadership impact
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium hover:border-zinc-400"
                href="#publications"
              >
                View publications
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/headshot.jpg"
              alt="Jean Mendez"
              width={280}
              height={350}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:grid-cols-3">
          <div>
            <div className="text-sm font-medium text-zinc-600">Domains</div>
            <div className="mt-2 text-sm text-zinc-800">
              Neuropsychiatry • Complex studies • Regulated environments
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-zinc-600">Strengths</div>
            <div className="mt-2 text-sm text-zinc-800">
              Startup acceleration • Enrollment systems • Vendor governance
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-zinc-600">Operating Style</div>
            <div className="mt-2 text-sm text-zinc-800">
              Decision gates • Clear ownership • High documentation quality
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-700">
          I am a physician by training and a clinical operations leader by practice. My work focuses on building
          scalable trial infrastructure, aligning stakeholders to the critical path, and delivering high-quality
          execution under real constraints—timelines, budgets, and regulatory complexity.
        </p>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-zinc-200 p-6">
              <div className="text-lg font-semibold">{p.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">Leadership & Impact</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { k: "Startup", v: "Reduced cycle time", s: "Parallelized submissions; tightened vendor + regulatory workflows." },
            { k: "Execution", v: "Stabilized complex dependencies", s: "Resolved supply/regulatory bottlenecks and restored program momentum." },
            { k: "Infrastructure", v: "Built scalable SOP/MOP stack", s: "Standardized governance, documentation, and handoffs across studies." },
          ].map((x) => (
            <div key={x.k} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="text-sm font-medium text-zinc-600">{x.k}</div>
              <div className="mt-2 text-lg font-semibold">{x.v}</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">{x.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Publications</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Selected publications and research contributions.
            </p>
          </div>
          <Link className="text-sm text-zinc-800 underline-offset-4 hover:underline" href="/publications">
            View all
          </Link>
        </div>

        <div className="mt-6 grid gap-4">
          {publications.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-300"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-600">
                <span className="font-medium text-zinc-700">{p.year}</span>
                <span>•</span>
                <span>{p.venue}</span>
              </div>
              <div className="mt-2 text-base font-semibold">{p.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">{p.note}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-700">
            For roles in clinical operations / clinical development leadership, speaking requests, or collaborations,
            the fastest way to reach me is email or LinkedIn.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
               href="mailto:jeanmendezvasquez@gmail.com">
              Email me
            </a>
            <a className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium hover:border-zinc-400"
               href="https://www.linkedin.com/in/jean-mendez-a0390a100/"
               target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200/70 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-zinc-600">
          © {new Date().getFullYear()} Jean Mendez, MD
        </div>
      </footer>
    </main>
  );
}
