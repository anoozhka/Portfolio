import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Chatbox from './components/chatbot/Chatbox'

const App = () => {
  return (
    <>
     
      <Header />
        <Nav />
      <About />
        <Skills />
        <Portfolio />
        <Contact />
      <Footer />
      <Chatbox />
    </>
  )
}

export default App