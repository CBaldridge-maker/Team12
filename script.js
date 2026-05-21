const alertSearch = document.getElementById('alert-search')
const alertRows = Array.from(document.querySelectorAll('#alert-rows tr'))

alertSearch?.addEventListener('input', (event) => {
    const query = event.target.value.trim().toLowerCase()
    alertRows.forEach((row) => {
        const text = row.textContent.toLowerCase()
        row.style.display = text.includes(query) ? '' : 'none'
    })
})

const tickerBody = document.getElementById('alert-ticker')
const tickerLines = document.getElementById('ticker-lines')
const tickerCurrent = document.getElementById('ticker-current')
const liveStatus = document.getElementById('live-status')
const osintSearch = document.getElementById('osint-search')
const osintItems = Array.from(document.querySelectorAll('.result-item'))
const osintTickerBody = document.getElementById('osint-ticker')
const osintTickerLines = document.getElementById('osint-ticker-lines')
const osintTickerCurrent = document.getElementById('osint-ticker-current')

const liveLines = [
    '>> malware quarantined: ClawCrypt.3 isolated successfully',
    '>> suspicious domain blocked: phishcat[.]farm prevented via gateway',
    '>> sandbox analysis completed: Whisker Wiper behavior contained',
    '>> credential stuffing alert: throttled suspicious login traffic',
    '>> outbound beacon prevented: phantom host 10.0.0.45:443',
    '>> analyst note: review email filters after fake phishing event',
    '>> IOC enrichment added: catwarden hash and registry indicators',
    '>> network telemetry flagged anomalous DNS reconnaissance sequence',
]

const osintLines = [
    '>> WHOIS lookup: domain phishcat.farm retrieved',
    '>> DNS records enumerated: A, MX, TXT, CNAME',
    '>> Metadata analysis: sample file contains cat-asset markers',
    '>> Social monitoring: public post mentions catmail.net',
    '>> Threat feed update: new suspicious host seen in sensor logs',
    '>> OSINT pipeline: reconnaissance summary ready for review',
]

let currentLineIndex = 0
let currentCharIndex = 0
let osintCurrentLineIndex = 0
let osintCharIndex = 0
let bufferLines = []
let osintBufferLines = []

function updateTicker() {
    if (!tickerCurrent) return

    const line = liveLines[currentLineIndex]

    if (currentCharIndex <= line.length) {
        tickerCurrent.textContent = line.slice(0, currentCharIndex)
        currentCharIndex += 1
        setTimeout(updateTicker, 40)
    } else {
        appendLine(line)
        currentLineIndex = (currentLineIndex + 1) % liveLines.length
        currentCharIndex = 0
        setTimeout(updateTicker, 1200)
    }
}

function appendLine(line) {
    if (!tickerLines || !tickerBody) return
    const entry = document.createElement('p')
    entry.className = 'terminal-line'
    entry.textContent = line
    tickerLines.appendChild(entry)
    bufferLines.push(entry)

    if (bufferLines.length > 12) {
        const removed = bufferLines.shift()
        removed.remove()
    }

    tickerBody.scrollTop = tickerBody.scrollHeight
}

function appendOsintLine(line) {
    if (!osintTickerLines || !osintTickerBody) return
    const entry = document.createElement('p')
    entry.className = 'terminal-line'
    entry.textContent = line
    osintTickerLines.appendChild(entry)
    osintBufferLines.push(entry)

    if (osintBufferLines.length > 12) {
        const removed = osintBufferLines.shift()
        removed.remove()
    }

    osintTickerBody.scrollTop = osintTickerBody.scrollHeight
}

function updateOsintTicker() {
    if (!osintTickerCurrent) return

    const line = osintLines[osintCurrentLineIndex]

    if (osintCharIndex <= line.length) {
        osintTickerCurrent.textContent = line.slice(0, osintCharIndex)
        osintCharIndex += 1
        setTimeout(updateOsintTicker, 40)
    } else {
        appendOsintLine(line)
        osintCurrentLineIndex = (osintCurrentLineIndex + 1) % osintLines.length
        osintCharIndex = 0
        setTimeout(updateOsintTicker, 1200)
    }
}

function filterOsintCases(query) {
    if (!osintItems.length) return
    const searchValue = query.trim().toLowerCase()
    osintItems.forEach((item) => {
        const text = item.dataset.search.toLowerCase()
        item.style.display = text.includes(searchValue) ? '' : 'none'
    })
}

function updateLiveStatus() {
    if (!liveStatus) return
    liveStatus.textContent = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a').forEach((anchor) => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault()
            const target = document.querySelector(this.getAttribute('href'))
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' })
            }
        })
    })

    const header = document.querySelector('header')
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.style.background = 'rgba(4, 10, 20, 0.98)'
        } else {
            header.style.background = 'rgba(4, 10, 20, 0.96)'
        }
    })

    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1'
                    entry.target.style.transform = 'translateY(0)'
                }
            })
        },
        { threshold: 0.1 },
    )

    sections.forEach((section) => {
        section.style.opacity = '0'
        section.style.transform = 'translateY(30px)'
        section.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
        observer.observe(section)
    })

    if (osintSearch) {
        osintSearch.addEventListener('input', (event) => {
            filterOsintCases(event.target.value)
        })
    }

    document.querySelectorAll('.dashboard-card').forEach((card) => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded')
        })
    })

    updateLiveStatus()
    setInterval(updateLiveStatus, 1000)
    updateTicker()
    updateOsintTicker()
})
