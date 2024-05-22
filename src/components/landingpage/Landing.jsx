import React from 'react'
import Header from '../landingpage/Header'
import Container1 from '../landingpage/Container1'
import Container2 from '../landingpage/Container2'
import Container3 from '../landingpage/Container3'
import Container4 from '../landingpage/Container4'
import Footer from '../landingpage/Footer'
import SignupOverlay from './SignupOverlay'
import LoginOverlay from './LoginOverlay'
import './Landing.css'

function Landing() {

  return (
    <div className="Landing">
      <div className='HeaderPage'>
        <Header />
        <hr />
      </div>
      <div className='HeaderEmptySpace'></div>
      <section className='home' id="home">
        <Container1 />
      </section>
      <section className='our-product' id="our-product">
        <Container2 />
      </section>
      <section className='partners' id="partners">
        <Container3 />
      </section>
      <section className='about-us' id="about-us">
        <Container4 />
      </section>
      <section className='contact' id="contact">
        <Footer />
      </section>
      <LoginOverlay />
      <SignupOverlay />
    </div>
  )



}

export default Landing