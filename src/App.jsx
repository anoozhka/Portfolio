import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Chatbot from './components/chatbot/Chatbot'

const App = () => {
  return (
    <>
      <Header />
      <Chatbot />
        <Nav />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App