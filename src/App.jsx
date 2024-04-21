import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Container1 from './components/layout/Container1'
import Container2 from './components/layout/Container2'

function App() {

  return (
    <div className='App'>
        <Header />
        <hr />
        <Container1/>
        <Container2/>
        <Footer />
    </div>
  )
}

export default App