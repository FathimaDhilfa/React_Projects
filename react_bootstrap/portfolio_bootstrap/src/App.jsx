import './App.css'
import Navbar from './components/Navbar.jsx'
import Intro from './components/Intro.jsx'
import Works from './components/Works.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <Intro />
      <Works />
      <About />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
