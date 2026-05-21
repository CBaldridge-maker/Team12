import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ThreatIntelligence from './pages/ThreatIntelligence.jsx'
import MeowwareAnalysis from './pages/MeowwareAnalysis.jsx'
import AnalystTeam from './pages/AnalystTeam.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/threat-intelligence" element={<ThreatIntelligence />} />
          <Route path="/meowware-analysis" element={<MeowwareAnalysis />} />
          <Route path="/analyst-team" element={<AnalystTeam />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
