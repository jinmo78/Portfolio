import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Intro from './components/sections/Intro'
import TechStack from './components/sections/TechStack'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-5xl px-6 pt-16">
        <div id="intro">
          <Intro />
        </div>
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
