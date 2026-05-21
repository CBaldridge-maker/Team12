function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">PurrSec Labs</p>
          <p className="mt-2 text-xs text-slate-500">Sample defensive security lab focused on educational research and safe incident awareness.</p>
        </div>
        <p className="text-sm">© 2026 PurrSec Labs · Designed with a cyberpunk SOC aesthetic.</p>
      </div>
    </footer>
  )
}

export default Footer
