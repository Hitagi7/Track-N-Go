import { useState } from 'react'
import './App.css'
import Header from './components/landingpage/Header'
import Footer from './components/landingpage/Footer'
import Container1 from './components/landingpage/Container1'
import Container2 from './components/landingpage/Container2'
import Container3 from './components/landingpage/Container3'
import Container4 from './components/landingpage/Container4'

function App() {

  return (
    <div className='App'>
        <Header />
        <hr />
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Footer />
    </div>
  )
}

export default App