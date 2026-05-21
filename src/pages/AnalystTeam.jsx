import WhiskersPhoto from '../assets/whiskers.png'
import SalemPhoto from '../assets/salem.png'
import LunaPhoto from '../assets/luna.png'
import PawsPhoto from '../assets/paws.png'

const analysts = [
  {
    name: 'Whiskers',
    role: 'Threat Hunter',
    image: WhiskersPhoto,
    certifications: ['Certified Threat Intelligence Analyst', 'TI-101'],
    specialties: ['IOC enrichment', 'adversary emulation', 'event correlation'],
    bio: 'Whiskers tracks phantom catfish campaigns across the network and teaches teams how to respond to suspicious behavior with humor and precision.',
  },
  {
    name: 'Salem',
    role: 'Malware Analyst',
    image: SalemPhoto,
    certifications: ['Certified Malware Reverse Engineer', 'MRE-202'],
    specialties: ['sandbox analysis', 'binary triage', 'payload behavior'],
    bio: 'Salem dissects Meowware safely in the lab, translating playful payloads into practical detection recommendations.',
  },
  {
    name: 'Luna',
    role: 'SOC Manager',
    image: LunaPhoto,
    certifications: ['Certified SOC Leader', 'SOC-303'],
    specialties: ['incident coordination', 'responder coaching', 'alert strategy'],
    bio: 'Luna oversees the SOC with a calm, catlike grace, ensuring analysts practice safe workflows and clear reporting.',
  },
  {
    name: 'Paws',
    role: 'Intel Engineer',
    image: PawsPhoto,
    certifications: ['Security Data Specialist', 'SDS-108'],
    specialties: ['log parsing', 'rule tuning', 'dashboard design'],
    bio: 'Paws builds the dashboards that make threat signals visible, balancing serious security metrics with a lighthearted portfolio narrative.',
  },
]

function AnalystTeam() {
  return (
    <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-cyan-300">Analyst Team</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
            Meet the cat-powered defenders of PurrSec Labs.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
            A cat-themed cybersecurity team built for portfolio storytelling. Each profile blends professional roles with subtle cat humor while staying grounded in defensive skills.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {analysts.map((analyst) => (
            <article key={analyst.name} className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-glow transition hover:-translate-y-1">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950">
                  <img src={analyst.image} alt={`${analyst.name} profile`} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{analyst.role}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-100">{analyst.name}</h2>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Certifications</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {analyst.certifications.map((cert) => (
                      <li key={cert}>• {cert}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-slate-800/80 bg-slate-950/90 p-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Specialties</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {analyst.specialties.map((specialty) => (
                      <li key={specialty}>• {specialty}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-slate-300">{analyst.bio}</p>
            </article>
          ))}
        </div>

        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-glow">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Team culture</p>
          <p className="mt-4 text-slate-300">
            PurrSec Labs blends professional cybersecurity concepts and portfolio storytelling with a playful feline theme, keeping the site educational, safe, and memorable.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AnalystTeam
