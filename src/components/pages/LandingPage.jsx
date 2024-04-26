import React from 'react'
import Header from '../landingpage/Header'
import Container1 from '../landingpage/Container1'
import Container2 from '../landingpage/Container2'
import Container3 from '../landingpage/Container3'
import Container4 from '../landingpage/Container4'
import Footer from '../landingpage/Footer'
import SignupOverlay from '../landingpage/SignupOverlay'
import LoginOverlay from '../landingpage/LoginOverlay'
import './LandingPage.css'

function LandingPage() {

  return (
    <div class="body">
      <Header />
      <hr />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <LoginOverlay />
      <SignupOverlay />
      <Footer />
    </div>
  )



}

export default LandingPage