import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'  
import Trusted from './sections/Trusted'
import Testomonials from './sections/Testomonials'
import Features from './sections/Features'
import Blog from './sections/Blog'
import Skills from './sections/Skills'
import TechnologyPartner from './sections/TechnologyPartner'
import Thinking from './sections/Thinking'
import Newsletter from './sections/Newsletter'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main>
    <Navbar/>
    <div>
      <Hero/>
      <Trusted/>
      <Testomonials/>
      <Features/>
      <Blog/>
      <Skills/>
      <TechnologyPartner/>
      <Thinking/>
      <Newsletter/>
      <Footer/>
    </div>
    </main>
  )
}
export default App