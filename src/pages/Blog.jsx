const posts = [
  {
    title: 'Cyberpunk Threat Trends for Defenders',
    excerpt: 'A briefing on how modern blue teams can use safe storytelling to teach threat awareness and incident response.',
  },
  {
    title: 'Meowware Sandbox Notes',
    excerpt: 'Review lab observations that highlight key detection ideas without relying on real malware.',
  },
  {
    title: 'SOC Culture and Collaboration',
    excerpt: 'Tips for building strong defender workflows and communication practices in a futuristic operations center.',
  },
]

function Blog() {
  return (
    <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-cyan-300">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
            Read the latest defensive research dispatches.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Our blog is a safe venue for blue-team essays, fictional investigations, and security operations insights.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-glow transition hover:-translate-y-1">
              <h2 className="text-2xl font-semibold text-slate-100">{post.title}</h2>
              <p className="mt-4 text-slate-300">{post.excerpt}</p>
              <div className="mt-6 text-sm font-semibold text-cyan-300">Read story →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
