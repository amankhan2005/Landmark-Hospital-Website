import React from 'react'
import TopNavBar from '../components/TopNavbar'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlide'
import AboutSection from '../components/About'
import Specialties from '../components/OurFacilities'
import OurTeam from '../components/OurTeam2'
import Stats from '../components/Stats'
import WhyChooseUs from '../components/WhyChooseUs'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import HowWeWork from '../components/HowWeWork'
import BlogComponent from '../components/BlogSection'

function Home() {
  return (
    <>
    
    <HeroSlider/>
    <AboutSection/>
    <Stats/>
    <Specialties/>
    <OurTeam/>
    <HowWeWork/>
    {/* <OurTeam/> */}
    <WhyChooseUs/>
    <ContactUs/>
    <Gallery/>
    <BlogComponent/>
    {/* <Footer/> */}
    </>
  )
}

export default Home