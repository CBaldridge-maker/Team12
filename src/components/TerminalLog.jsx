import { useEffect, useRef, useState } from 'react'

function TerminalLog({
  title = 'Monitoring Log',
  lines = [],
  typingSpeed = 45,
  pauseAfterLine = 700,
  maxLines = 12,
}) {
  const [buffer, setBuffer] = useState([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [cursor, setCursor] = useState(true)
  const containerRef = useRef(null)

  useEffect(() => {
    const blink = setInterval(() => setCursor((prev) => !prev), 520)
    return () => clearInterval(blink)
  }, [])

  useEffect(() => {
    if (currentLineIndex >= lines.length) return

    const currentLine = lines[currentLineIndex]
    if (currentText.length < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }

    const pause = setTimeout(() => {
      setBuffer((prev) => [...prev, currentLine].slice(-maxLines))
      setCurrentText('')
      setCurrentLineIndex((prev) => prev + 1)
    }, pauseAfterLine)

    return () => clearTimeout(pause)
  }, [currentLineIndex, currentText, lines, typingSpeed, pauseAfterLine, maxLines])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [buffer, currentText])

  return (
    <div className="terminal-window rounded-3xl border border-slate-800/80 bg-slate-900/95 p-4 shadow-glow">
      <div className="terminal-header mb-4 flex items-center gap-3 rounded-2xl bg-slate-950/90 px-4 py-3 text-xs uppercase tracking-[0.35em] text-slate-400">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span>{title}</span>
      </div>
      <div
        ref={containerRef}
        className="terminal-body min-h-[210px] overflow-y-auto rounded-3xl border border-slate-800/70 bg-slate-950/90 p-4 font-mono text-sm leading-6 text-slate-200"
      >
        {buffer.map((line, index) => (
          <p key={`${line}-${index}`} className="terminal-line break-words text-slate-200/90">
            {line}
          </p>
        ))}
        {currentLineIndex < lines.length && (
          <p className="terminal-line break-words text-slate-100">
            {currentText}
            <span className="inline-block w-2 text-cyan-300">{cursor ? '▌' : ' '}</span>
          </p>
        )}
        {currentLineIndex >= lines.length && currentText === '' && (
          <p className="mt-2 text-slate-500">Monitoring paused. Awaiting next safe event...</p>
        )}
      </div>
    </div>
  )
}

export default TerminalLog
