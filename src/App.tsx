import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_12%_14%,rgba(13,121,119,0.10),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(197,212,228,0.40),transparent_25%),linear-gradient(180deg,#F4F8FC_0%,#EEF3F9_50%,#F4F8FC_100%)] text-lmText transition-colors duration-300 dark:bg-[radial-gradient(circle_at_14%_14%,rgba(91,192,190,0.18),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(168,178,209,0.14),transparent_25%),linear-gradient(180deg,#070d1f_0%,#0B132B_55%,#0a1228_100%)] dark:text-ice">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
