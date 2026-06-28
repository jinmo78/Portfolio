import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import GlowBackground from './components/ui/GlowBackground'
import ScrollToTopButton from './components/ui/ScrollToTopButton'
import Intro from './components/sections/Intro'
import TechStack from './components/sections/TechStack'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="relative min-h-screen">
      <GlowBackground />
      <Header />

      <main className="mx-auto max-w-5xl px-5 sm:px-6">
        <div id="intro">
          <Intro />
        </div>
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App
