import React from 'react'
import TopNavBar from '../components/TopNavbar'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlide'
import AboutSection from '../components/About'
import Specialties from '../components/OurSpecialties'
import OurTeam from '../components/OurTeam'
import Stats from '../components/Stats'
import WhyChooseUs from '../components/WhyChooseUs'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <TopNavBar/>
    <Header/>
    <HeroSlider/>
    <AboutSection/>
    <Specialties/>
    <OurTeam/>
    <Stats/>
    <WhyChooseUs/>
    <Gallery/>
    <Footer/>
    </>
  )
}

export default Home