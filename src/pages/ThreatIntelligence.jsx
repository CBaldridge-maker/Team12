import { useEffect, useMemo, useState } from 'react'
import TerminalLog from '../components/TerminalLog.jsx'

const threatAlerts = [
  {
    id: 'ALRT-001',
    time: '09:18',
    severity: 'Critical',
    category: 'Ransomware',
    title: 'ClawCrypt encryption attempt',
    note: 'Simulated ransomware payload attempted to encrypt mapped drives. Prioritize containment and restore planning.',
  },
  {
    id: 'ALRT-002',
    time: '09:25',
    severity: 'High',
    category: 'Phishing Domain',
    title: 'Detected suspected phishing domain',
    note: 'Fake corporate login page detected in training environment; block domain and review email filtering rules.',
  },
  {
    id: 'ALRT-003',
    time: '09:32',
    severity: 'Medium',
    category: 'Outbound Traffic',
    title: 'Suspicious HTTPS beacon',
    note: 'Unusual outbound connection to phantom command-and-control host from sandboxed process.',
  },
  {
    id: 'ALRT-004',
    time: '09:45',
    severity: 'High',
    category: 'Credential Stuffing',
    title: 'Brute force login attempts',
    note: 'Multiple failed logins detected across several accounts; recommend throttling and MFA enforcement.',
  },
  {
    id: 'ALRT-005',
    time: '10:02',
    severity: 'Low',
    category: 'Reconnaissance',
    title: 'DNS enumeration behavior',
    note: 'Imaginary scanning activity observed from sandbox host; use as a teaching example for anomaly detection.',
  },
]

const severityStyles = {
  Critical: 'bg-rose-500/10 text-rose-300',
  High: 'bg-orange-500/10 text-orange-300',
  Medium: 'bg-amber-500/10 text-amber-300',
  Low: 'bg-slate-700/10 text-slate-300',
}

const categoryStyles = {
  Ransomware: 'bg-red-500/10 text-rose-200',
  'Phishing Domain': 'bg-cyan-500/10 text-cyan-200',
  'Outbound Traffic': 'bg-sky-500/10 text-sky-200',
  'Credential Stuffing': 'bg-violet-500/10 text-violet-200',
  Reconnaissance: 'bg-emerald-500/10 text-emerald-200',
}

function ThreatIntelligence() {
  const [search, setSearch] = useState('')
  const [liveTime, setLiveTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setLiveTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const filteredAlerts = useMemo(() => {
    const term = search.trim().toLowerCase()
    return term
      ? threatAlerts.filter((alert) =>
          [alert.id, alert.title, alert.category, alert.severity, alert.note]
            .some((value) => value.toLowerCase().includes(term)),
        )
      : threatAlerts
  }, [search])

  const terminalLines = [
    '>> malware quarantined: ClawCrypt.3 in isolated sandbox',
    '>> suspicious domain blocked: phishcat[.]farm via web gateway',
    '>> sandbox analysis completed: Whisker Wiper behavior contained',
    '>> credential stuffing pattern detected and throttled',
    '>> outbound beacon blocked from phantom host 10.0.0.45:443',
    '>> analyst note: review alert thresholds and email filters',
  ]

  return (
    <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-cyan-300">Threat Intelligence</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
            SOC alert feed for defensive blue-team storytelling.
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-7 text-slate-400">
            A threat intelligence dashboard with safe alerts, severity ratings, categories, timestamps, and analyst notes.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Live alert feed</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-2xl font-semibold text-slate-100">
                    <span className="inline-flex h-3.5 w-3.5 animate-pulse rounded-full bg-rose-400 shadow-[0_0_12px_rgba(248,113,113,0.6)]" />
                    <span>Recent detections</span>
                    <span className="ml-3 rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">
                      Live {liveTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </span>
                  </div>
                </div>
                <label className="block w-full max-w-sm">
                  <span className="sr-only">Search alerts</span>
                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search alerts by keyword..."
                    className="w-full rounded-2xl border border-slate-800/90 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  />
                </label>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/95 text-sm">
                <table className="min-w-full divide-y divide-slate-800">
                  <thead className="bg-slate-900/95 text-left text-xs uppercase tracking-[0.3em] text-slate-400">
                    <tr>
                      <th className="px-4 py-4">Time</th>
                      <th className="px-4 py-4">Alert</th>
                      <th className="px-4 py-4">Category</th>
                      <th className="px-4 py-4">Severity</th>
                      <th className="px-4 py-4">Analyst note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-950">
                    {filteredAlerts.map((alert) => (
                      <tr key={alert.id} className="transition hover:bg-slate-800/80">
                        <td className="px-4 py-4 text-slate-200">{alert.time}</td>
                        <td className="px-4 py-4 font-medium text-slate-100">{alert.title}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[alert.category]}`}>
                            {alert.category}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${severityStyles[alert.severity]}`}>
                            {alert.severity}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-slate-300">{alert.note}</td>
                      </tr>
                    ))}
                    {filteredAlerts.length === 0 && (
                      <tr>
                        <td colSpan={5} className="px-4 py-8 text-center text-slate-400">
                          No matching alerts found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <article className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow transition hover:-translate-y-1">
                <h3 className="text-sm uppercase tracking-[0.35em] text-cyan-300">Phishing domains</h3>
                <p className="mt-4 text-3xl font-semibold text-slate-100">18</p>
                <p className="mt-2 text-slate-400">Imaginary phishing domains observed in email and web telemetry.</p>
              </article>
              <article className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow transition hover:-translate-y-1">
                <h3 className="text-sm uppercase tracking-[0.35em] text-cyan-300">Ransomware hits</h3>
                <p className="mt-4 text-3xl font-semibold text-slate-100">4</p>
                <p className="mt-2 text-slate-400">Demonstrations used to teach severity triage and incident escalation.</p>
              </article>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">SOC summary</p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4">
                  <p className="text-sm text-slate-400">Highest severity</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-100">Critical</p>
                </div>
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4">
                  <p className="text-sm text-slate-400">Active categories</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-100">5</p>
                </div>
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4">
                  <p className="text-sm text-slate-400">Analyst notes</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-100">Tracked</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Analyst notes</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">Investigation guidance</p>
                </div>
                <span className="rounded-full bg-slate-800/90 px-3 py-1 text-xs text-slate-400">Portfolio</span>
              </div>
              <div className="mt-6 space-y-4 text-slate-300">
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4">
                  <p className="text-sm text-slate-400">Note</p>
                  <p className="mt-2 text-slate-100">Focus on correlating phishing signals with outbound traffic and suspicious login behavior.</p>
                </div>
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4">
                  <p className="text-sm text-slate-400">Note</p>
                  <p className="mt-2 text-slate-100">This dashboard is a portfolio demonstration; use it to explain process, not to replicate real threat actor tooling.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Live activity</p>
              <div className="mt-6">
                <TerminalLog title="SOC monitoring logs" lines={terminalLines} />
              </div>
            </div>
          </aside>
        </div>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-glow">
          <h2 className="text-2xl font-semibold text-slate-100">Educational reminder</h2>
          <p className="mt-4 text-slate-300">
            This feed is built with invented alerts and synthetic event data. It is designed for portfolio demonstration and defensive security awareness rather than real malicious intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ThreatIntelligence
