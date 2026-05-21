import { useMemo, useState } from 'react'
import TerminalLog from '../components/TerminalLog.jsx'

const analysisReports = [
  {
    id: 'MW-101',
    name: 'Purrstorm Injector',
    family: 'Meowware RAT',
    severity: 'High',
    verdict: 'Suspicious',
    observed: '2026-05-18',
  },
  {
    id: 'MW-202',
    name: 'Whisker Wiper',
    family: 'Cleanup Kit',
    severity: 'Medium',
    verdict: 'Potentially unwanted',
    observed: '2026-05-16',
  },
  {
    id: 'MW-309',
    name: 'Feline Beacon',
    family: 'Telemetry Beacon',
    severity: 'Critical',
    verdict: 'Malicious',
    observed: '2026-05-17',
  },
  {
    id: 'MW-412',
    name: 'ClawCrypt Loader',
    family: 'Dropper',
    severity: 'High',
    verdict: 'Malicious',
    observed: '2026-05-14',
  },
  {
    id: 'MW-528',
    name: 'Nyan Network Scanner',
    family: 'Recon Tool',
    severity: 'Low',
    verdict: 'Informational',
    observed: '2026-05-12',
  },
]

const iocIndicators = [
  { type: 'Domain', value: 'maliciouscat[.]io', confidence: 'High' },
  { type: 'IP', value: '192.168.88.77', confidence: 'Medium' },
  { type: 'Hash', value: 'd4f1a7b8c1e2f9bd6a5c0d7e8f3b9a1c', confidence: 'High' },
  { type: 'URL', value: 'https://hive.meow-signal/track', confidence: 'Medium' },
  { type: 'Registry', value: 'HKCU\\Software\\PurrSec', confidence: 'Low' },
]

const sandboxActivity = [
  { step: 'Process spawn', detail: 'Injected into svchost.exe', status: 'Completed' },
  { step: 'Filesystem access', detail: 'Created temp catcache.dll', status: 'Completed' },
  { step: 'Network beacon', detail: 'Outbound HTTPS to maliciouscat.io', status: 'Alerted' },
  { step: 'Credential lookup', detail: 'Enumerated cached logins', status: 'Blocked' },
  { step: 'Persistence check', detail: 'Created startup entry', status: 'Detected' },
]

const networkConnections = [
  { remote: '53.145.213.66:443', protocol: 'HTTPS', process: 'ClawCrypt Loader', status: 'Established' },
  { remote: '198.51.100.23:8080', protocol: 'HTTP', process: 'Purrstorm Injector', status: 'Dropped' },
  { remote: '10.0.0.45:22', protocol: 'SSH', process: 'Feline Beacon', status: 'Established' },
  { remote: '172.16.5.12:4444', protocol: 'TCP', process: 'Whisker Wiper', status: 'Blocked' },
]

const processTree = [
  {
    name: 'explorer.exe',
    details: 'User session parent',
    children: [
      { name: 'svchost.exe', details: 'Injected runtime host', children: [{ name: 'catbot.exe', details: 'Meowware payload', children: [] }] },
      { name: 'notepad.exe', details: 'Suspicious child shell', children: [] },
    ],
  },
]

const osintTools = [
  { title: 'WHOIS explorer', description: 'Sample registration details and registrar history for mock domains.' },
  { title: 'DNS analyzer', description: 'A, MX, TXT, and CNAME records for educational investigation.' },
  { title: 'Metadata scanner', description: 'Sample file metadata details extracted safely for training.' },
  { title: 'Social monitor', description: 'Public mention volumes and sample chatter patterns.' },
  { title: 'Threat feed', description: 'Synthetic intelligence signals curated for teaching.' },
]

const osintCases = [
  {
    id: 'OSINT-001',
    title: 'phishcat.farm',
    tag: 'Domain',
    label: 'Domain intelligence',
    details: ['WHOIS age: 15 days', 'DNS TTL: 300', 'Reputation: suspicious'],
    search: 'phishcat farm whois dns metadata social threat',
  },
  {
    id: 'OSINT-002',
    title: 'catmail.net',
    tag: 'Metadata',
    label: 'Email provider trace',
    details: ['WHOIS age: 12 days', 'DNS MX: 2 records', 'Social mention: 8'],
    search: 'catmail.net email metadata whois dns social',
  },
  {
    id: 'OSINT-003',
    title: 'nettracker.io',
    tag: 'Threat',
    label: 'Sample investigative target',
    details: ['WHOIS age: 22 days', 'DNS A: 4 records', 'Reputation: moderate'],
    search: 'nettracker.io dns whois social threat intelligence',
  },
]

const osintLines = [
  '>> WHOIS lookup: domain phishcat.farm retrieved',
  '>> DNS records enumerated: A, MX, TXT, CNAME',
  '>> Metadata analysis: sample file contains cat-asset markers',
  '>> Social monitoring: public post mentions catmail.net',
  '>> Threat feed update: new suspicious host seen in sensor logs',
  '>> OSINT pipeline: reconnaissance summary ready for review',
]

const statusToColor = {
  Critical: 'bg-red-500/15 text-red-300',
  High: 'bg-rose-500/10 text-rose-300',
  Medium: 'bg-orange-400/10 text-orange-300',
  Low: 'bg-emerald-400/10 text-emerald-300',
  Informational: 'bg-slate-700/10 text-slate-300',
}

const statusDot = {
  Completed: 'bg-emerald-400',
  Alerted: 'bg-amber-400',
  Blocked: 'bg-cyan-300',
  Detected: 'bg-sky-400',
  Established: 'bg-slate-300',
  Dropped: 'bg-rose-400',
}

function MeowwareAnalysis() {
  const [query, setQuery] = useState('')
  const [osintQuery, setOsintQuery] = useState('')

  const filteredReports = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return analysisReports
    return analysisReports.filter((report) =>
      [report.id, report.name, report.family, report.severity, report.verdict, report.observed]
        .some((value) => value.toLowerCase().includes(term))
    )
  }, [query])

  const filteredOsintCases = useMemo(() => {
    const term = osintQuery.trim().toLowerCase()
    if (!term) return osintCases
    return osintCases.filter((item) => item.search.includes(term))
  }, [osintQuery])

  return (
    <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-cyan-300">Meowware Analysis</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
            Malware analysis dashboard for defensive SOC storytelling.
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-7 text-slate-400">
            This interactive dashboard presents analysis reports, IOCs, sandbox activity, process trees, network connections, and severity ratings for safe cybersecurity demonstration.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          <article className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow transition hover:-translate-y-1">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Analysis reports</p>
            <p className="mt-4 text-3xl font-semibold text-slate-50">5</p>
            <p className="mt-2 text-sm text-slate-400">Sample malware scenarios reviewed safely.</p>
          </article>
          <article className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow transition hover:-translate-y-1">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">IOC indicators</p>
            <p className="mt-4 text-3xl font-semibold text-slate-50">5</p>
            <p className="mt-2 text-sm text-slate-400">Imaginary domains, IPs, hashes, and registry entries.</p>
          </article>
          <article className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow transition hover:-translate-y-1">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Sandbox verdicts</p>
            <p className="mt-4 text-3xl font-semibold text-slate-50">4</p>
            <p className="mt-2 text-sm text-slate-400">Simulated execution tasks with safe status feedback.</p>
          </article>
          <article className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow transition hover:-translate-y-1">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Threat rating</p>
            <p className="mt-4 text-3xl font-semibold text-slate-50">Critical</p>
            <p className="mt-2 text-sm text-slate-400">Demonstrates severity prioritization and analyst response.</p>
          </article>
        </div>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">OSINT tools</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-100">Investigation command center</h2>
              <p className="mt-2 text-sm text-slate-400">Explore domain intelligence, WHOIS, DNS, social analysis, and threat feed insights in a safe training environment.</p>
            </div>
            <label className="block w-full max-w-md">
              <span className="sr-only">Search OSINT cases</span>
              <input
                value={osintQuery}
                onChange={(event) => setOsintQuery(event.target.value)}
                placeholder="Search OSINT cases, domains, tools..."
                className="w-full rounded-2xl border border-slate-800/90 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              />
            </label>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {osintTools.map((tool) => (
              <div key={tool.title} className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-5 transition hover:-translate-y-1 hover:border-cyan-400/30">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{tool.title}</p>
                <p className="mt-4 text-sm text-slate-400">{tool.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4">
            {filteredOsintCases.map((caseItem) => (
              <article key={caseItem.id} className="rounded-3xl border border-slate-800/80 bg-slate-950/95 p-5 shadow-glow transition hover:-translate-y-1">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-100">{caseItem.title}</p>
                    <p className="text-sm text-slate-400">{caseItem.label}</p>
                  </div>
                  <span className="inline-flex rounded-full bg-slate-800/90 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">{caseItem.tag}</span>
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-3 text-sm text-slate-400">
                  {caseItem.details.map((detail) => (
                    <span key={detail} className="rounded-2xl bg-slate-900/90 p-3">{detail}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">OSINT terminal</p>
            <TerminalLog title="OSINT analysis feed" lines={osintLines} />
          </div>
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Threat graph</p>
            <div className="mt-6 space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Phishing signals</span>
                  <span>78%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-800/80">
                  <div className="h-full rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-amber-300" style={{ width: '78%' }} />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Malicious DNS</span>
                  <span>55%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-800/80">
                  <div className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400" style={{ width: '55%' }} />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Fresh WHOIS</span>
                  <span>34%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-800/80">
                  <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400" style={{ width: '34%' }} />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Social chatter</span>
                  <span>62%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-800/80">
                  <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: '62%' }} />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />
              <p className="text-sm text-slate-400">Loading synthetic recon signals for the investigation summary.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow min-h-[20rem]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Threat table</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-100">Search reports</h2>
                </div>
                <label className="relative block w-full max-w-sm">
                  <span className="sr-only">Search reports</span>
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search by name, severity, verdict..."
                    className="w-full rounded-2xl border border-slate-800/90 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  />
                </label>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/95 text-sm">
                <table className="min-w-full divide-y divide-slate-800">
                  <thead className="bg-slate-900/95 text-left text-xs uppercase tracking-[0.3em] text-slate-400">
                    <tr>
                      <th className="px-4 py-4">Report ID</th>
                      <th className="px-4 py-4">Name</th>
                      <th className="px-4 py-4">Family</th>
                      <th className="px-4 py-4">Severity</th>
                      <th className="px-4 py-4">Verdict</th>
                      <th className="px-4 py-4">Observed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-950">
                    {filteredReports.map((report) => (
                      <tr key={report.id} className="transition hover:bg-slate-800/80">
                        <td className="px-4 py-4 font-medium text-slate-100">{report.id}</td>
                        <td className="px-4 py-4 text-slate-300">{report.name}</td>
                        <td className="px-4 py-4 text-slate-300">{report.family}</td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusToColor[report.severity]}`}>
                            {report.severity}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-slate-300">{report.verdict}</td>
                        <td className="px-4 py-4 text-slate-400">{report.observed}</td>
                      </tr>
                    ))}
                    {filteredReports.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                          No matching reports found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">IOC indicators</p>
                    <p className="mt-2 text-lg font-semibold text-slate-100">Top signals</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-slate-800/90 px-3 py-1 text-xs text-slate-300">5 items</span>
                </div>
                <ul className="mt-6 space-y-4 text-slate-300">
                  {iocIndicators.map((ioc) => (
                    <li key={ioc.value} className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm font-medium text-slate-100">{ioc.value}</p>
                        <span className="rounded-full bg-slate-800/90 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-slate-400">
                          {ioc.type}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-400">Confidence: {ioc.confidence}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow min-h-[20rem]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Process tree</p>
                    <p className="mt-2 text-lg font-semibold text-slate-100">Behavior snapshot</p>
                  </div>
                  <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">Animated</span>
                </div>
                <div className="mt-6 space-y-4 text-slate-300">
                  {processTree.map((node) => (
                    <div key={node.name} className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-3 w-3 animate-pulse rounded-full bg-cyan-300" />
                        <p className="font-semibold text-slate-100">{node.name}</p>
                        <span className="text-xs uppercase tracking-[0.35em] text-slate-500">{node.details}</span>
                      </div>
                      <div className="mt-4 space-y-3 pl-6">
                        {node.children.map((child) => (
                          <div key={child.name} className="rounded-2xl border border-slate-800/90 bg-slate-900/90 p-3">
                            <div className="flex items-center gap-3">
                              <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                              <p className="font-medium text-slate-100">{child.name}</p>
                            </div>
                            <p className="mt-1 text-sm text-slate-400">{child.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow min-h-[28rem]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Sandbox activity</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">Execution timeline</p>
                </div>
                <span className="inline-flex rounded-full bg-slate-800/90 px-3 py-1 text-xs text-slate-300">Simulated</span>
              </div>
              <ul className="mt-6 space-y-4 text-slate-300">
                {sandboxActivity.map((activity) => (
                  <li key={activity.step} className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-100">{activity.step}</p>
                        <p className="mt-1 text-sm text-slate-400">{activity.detail}</p>
                      </div>
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${statusDot[activity.status] ?? 'bg-slate-600'} text-slate-950`}>
                        {activity.status}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Network connections</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">Outbound activity</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-slate-800/90 px-3 py-1 text-xs text-slate-300">Responsive</span>
              </div>
              <div className="mt-6 space-y-4">
                {networkConnections.map((connection) => (
                  <div key={connection.remote} className="grid gap-3 rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4 sm:grid-cols-[1.3fr_1fr]">
                    <div>
                      <p className="font-semibold text-slate-100">{connection.remote}</p>
                      <p className="mt-1 text-sm text-slate-400">{connection.process} • {connection.protocol}</p>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-right">
                      <span className="rounded-full bg-slate-800/90 px-3 py-1 text-xs text-slate-300">{connection.protocol}</span>
                      <span className={`inline-flex h-3 w-3 rounded-full ${statusDot[connection.status] ?? 'bg-slate-500'} animate-pulse`} />
                      <p className="text-sm font-medium text-slate-100">{connection.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-6 shadow-glow">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Terminal logs</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">Investigative feed</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">Terminal-style</span>
              </div>
              <div className="mt-6 space-y-3 rounded-3xl border border-slate-800/80 bg-slate-950/95 p-4 font-mono text-sm text-slate-200">
                <p>&gt;&gt; imported report MW-309 into sandbox</p>
                <p>&gt;&gt; spawned catbot.exe from svchost.exe</p>
                <p>&gt;&gt; detected suspicious DNS request to maliciouscat[.]io</p>
                <p>&gt;&gt; blocked outbound beacon on port 4444</p>
                <p>&gt;&gt; rated severity: <span className="text-cyan-300">Critical</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-glow">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Educational note</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-100">Synthetic analysis, real learning</h2>
              <p className="mt-4 text-slate-300">
                This dashboard is a portfolio-facing demonstration. It uses invented scenarios and indicators to show how analysts structure malicious behavior, prioritize response, and communicate findings without exposing anyone to real threats.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Process context</p>
              <p className="mt-3 text-slate-300">
                Analysts visualize process trees and network flows to identify suspicious parent-child relationships and containment paths during an investigation.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Portfolio focus</p>
              <p className="mt-3 text-slate-300">
                The content is intentionally safe, educational, and crafted to highlight cybersecurity thought process, not real malware execution or offensive tooling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MeowwareAnalysis
