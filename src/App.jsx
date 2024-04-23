import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Container1 from './components/layout/Container1'
import Container2 from './components/layout/Container2'
import Container3 from './components/layout/Container3'

function App() {

  return (
    <div className='App'>
        <Header />
        <hr />
        <Container1/>
        <Container2/>
        <Container3/>
        <Footer />
    </div>
  )
}

export default App