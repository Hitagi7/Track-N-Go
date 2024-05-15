import { useState } from 'react'
import './App.css'
import LandingPage from './components/pages/LandingPage'
import LoginOverlay from './components/landingpage/LoginOverlay'
import SignupOverlay from './components/landingpage/SignupOverlay'

function App() {

  return (
    <div className='App'>
      <LandingPage />
      <LoginOverlay />
      <SignupOverlay />
      

    </div>
  )
}

export default App