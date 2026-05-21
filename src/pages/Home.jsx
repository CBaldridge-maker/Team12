import { Link } from 'react-router-dom'
import AnimatedTerminal from '../components/AnimatedTerminal.jsx'

function Home() {
  return (
    <section className="overflow-hidden">
      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(6,182,212,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,84,166,0.14),_transparent_30%),linear-gradient(180deg,_#020617_0%,_#090c16_100%)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_30%)] blur-3xl opacity-60" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200 shadow-glow">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">PurrSec</span>
                Sample educational cybersecurity project
              </div>
              <div className="space-y-6">
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-50 sm:text-6xl">
                  PurrSec Labs
                  <span className="block text-cyan-300">Sample threat intelligence for defensive learning.</span>
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  This portfolio demonstration is a safe sample cybersecurity lab built to teach defenders how to think like analysts. Explore Meowware Analysis, SOC feeds, and threat storytelling in a glowing dark theme.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/threat-intelligence"
                    className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:bg-cyan-300"
                  >
                    View Threat Feed
                  </Link>
                  <Link
                    to="/meowware-analysis"
                    className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/25 bg-slate-900/95 px-6 py-3 text-sm font-semibold text-cyan-100 transition duration-200 hover:border-cyan-300 hover:text-cyan-200"
                  >
                    Open Meowware Analysis
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="fade-in-up rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow transition duration-500 hover:-translate-y-1 hover:bg-slate-900/100">
                  <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-300">Project Note</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                    PurrSec Labs is a sample security demonstration designed for portfolio storytelling and safe cybersecurity awareness.
                  </p>
                </article>
                <article className="fade-in-up rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow transition duration-500 hover:-translate-y-1 hover:bg-slate-900/100">
                  <h2 className="text-sm uppercase tracking-[0.4em] text-cyan-300">Teaching goal</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Learn threat detection, incident response, and analysis concepts through an immersive cat-themed SOC experience.
                  </p>
                </article>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: 'Threat feed', value: '12 live alerts' },
                  { label: 'Analyst hits', value: '84% triage success' },
                  { label: 'Sandbox runs', value: '27 safe detonations' },
                  { label: 'Detection score', value: '93.4% coverage' },
                ].map((stat) => (
                  <div key={stat.label} className="fade-in-up rounded-3xl border border-slate-800/80 bg-slate-900/95 p-5 text-slate-200 shadow-glow">
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{stat.label}</p>
                    <p className="mt-4 text-2xl font-semibold text-slate-50">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <AnimatedTerminal />
              <div className="rounded-3xl border border-cyan-400/15 bg-slate-900/95 p-6 shadow-glow">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="inline-flex rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-300">
                    Virtual SOC status
                  </span>
                  <span className="text-xs text-slate-500">Portfolio dashboard</span>
                </div>
                <div className="mt-6 space-y-4 text-slate-300">
                  <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
                    <p className="text-sm text-slate-400">Sensor health</p>
                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-4/5 rounded-full bg-cyan-400 transition-all duration-500" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
                    <p className="text-sm text-slate-400">Threat score</p>
                    <p className="mt-2 text-lg font-semibold text-slate-100">Low • 17/100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <section className="fade-in-up rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-glow">
            <span className="text-xs uppercase tracking-[0.35em] text-cyan-300">Overview</span>
            <h2 className="mt-4 text-2xl font-semibold text-slate-50">Educational SOC intelligence</h2>
            <p className="mt-4 text-slate-300">
              PurrSec Labs is a sample cybersecurity portfolio demonstration that teaches defenders how to interpret alerts, analyze threats, and respond safely.
            </p>
          </section>
          <section className="fade-in-up rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-glow">
            <span className="text-xs uppercase tracking-[0.35em] text-cyan-300">Mission</span>
            <h2 className="mt-4 text-2xl font-semibold text-slate-50">Protect, educate, detect</h2>
            <p className="mt-4 text-slate-300">
              The site is intentionally designed as a sample demonstration, built to show portfolio work while demonstrating defensive concepts and safe cybersecurity storytelling.
            </p>
          </section>
          <section className="fade-in-up rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-glow">
            <span className="text-xs uppercase tracking-[0.35em] text-cyan-300">Lab</span>
            <h2 className="mt-4 text-2xl font-semibold text-slate-50">Meowware Analysis</h2>
            <p className="mt-4 text-slate-300">
              Explore a playful sample malware research space where safe scenarios and analyst insights are used for learning and awareness.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Home
