import { useEffect, useMemo, useState } from 'react'

const terminalLines = [
  '>> initializing purrsec labs SOC matrix',
  '>> loading safe telemetry streams',
  '>> analyzing threat chatter for suspicious signatures',
  '>> cooling meowware sandbox results for defensive review',
  '>> monitoring network health and alert posture',
]

function AnimatedTerminal() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [activeLines, setActiveLines] = useState([])
  const [cursor, setCursor] = useState(true)

  const currentLine = useMemo(() => terminalLines[index] ?? '', [index])

  useEffect(() => {
    const blink = setInterval(() => setCursor((prev) => !prev), 520)
    return () => clearInterval(blink)
  }, [])

  useEffect(() => {
    if (index >= terminalLines.length) return

    const timeout = setTimeout(() => {
      if (text.length < currentLine.length) {
        setText(currentLine.slice(0, text.length + 1))
      } else {
        setActiveLines((prev) => [...prev, currentLine])
        setText('')
        setIndex((prev) => prev + 1)
      }
    }, text.length === currentLine.length ? 700 : 65)

    return () => clearTimeout(timeout)
  }, [text, currentLine, index])

  return (
    <div className="space-y-3 rounded-3xl border border-cyan-400/15 bg-slate-900/95 p-6 shadow-glow">
      <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800/90 text-slate-100">⌁</span>
        SOC terminal feed
      </div>
      <div className="space-y-2 font-mono text-sm leading-6 text-slate-200">
        {activeLines.map((line, idx) => (
          <p key={`${line}-${idx}`} className="break-words text-slate-200/90">{line}</p>
        ))}
        {index < terminalLines.length && (
          <p className="break-words text-slate-100">
            {text}
            <span className="inline-block w-2 text-cyan-300">{cursor ? '▌' : ' '}</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default AnimatedTerminal
