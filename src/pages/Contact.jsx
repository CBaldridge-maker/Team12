function Contact() {
  return (
    <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-10 shadow-glow">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.45em] text-cyan-300">Contact</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl">
                Reach out to the SOC team.
              </h1>
              <p className="mt-4 text-slate-300">
                Use this page to connect with the narrative lab, request educational updates, or explore how defensive storytelling can support security training.
              </p>

              <div className="mt-10 space-y-4 text-sm text-slate-300">
                <div>
                  <p className="font-semibold text-slate-100">Office</p>
                  <p>Cyber Cat Tower · Sector 9 · Neon Grid</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-100">Email</p>
                  <a href="mailto:hello@purrseclabs.example" className="text-cyan-300 hover:text-cyan-200">hello@purrseclabs.example</a>
                </div>
              </div>
            </div>

            <form className="space-y-5 rounded-3xl border border-slate-800/60 bg-slate-950/90 p-6">
              <label className="block text-sm font-medium text-slate-200">
                Name
                <input
                  type="text"
                  placeholder="Cat Defender"
                  className="mt-3 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                />
              </label>
              <label className="block text-sm font-medium text-slate-200">
                Email
                <input
                  type="email"
                  placeholder="defender@example.com"
                  className="mt-3 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                />
              </label>
              <label className="block text-sm font-medium text-slate-200">
                Message
                <textarea
                  rows="5"
                  placeholder="Tell us about your defensive research interest..."
                  className="mt-3 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
