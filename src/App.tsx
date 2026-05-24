import DarkVeil from './components/DarkVeil'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Career from './components/Career'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="dark-veil-bg" aria-hidden="true">
        <DarkVeil hueShift={25} />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Career />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
