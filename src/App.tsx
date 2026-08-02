import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Career from './components/Career'
import Workstyle from './components/Workstyle'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Workstyle />
        <Skills />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
