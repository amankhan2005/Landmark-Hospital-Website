import React from 'react'
import TopNavBar from '../components/TopNavbar'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlide'
import AboutSection from '../components/About'
import Facilities from '../components/FacilitiesSection'
import OurTeam from '../components/OurTeam2'
import Stats from '../components/Stats'
import WhyChooseUs from '../components/WhyChooseUs'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import HowWeWork from '../components/HowWeWork'
import BlogComponent from '../components/BlogSection'
import SpecialitiesSection from '../components/SpecialitiesSection'
import FacilitiesSection from '../components/FacilitiesSection'

function Home() {
  return (
    <>
    
    <HeroSlider/>
    <AboutSection/>
    <SpecialitiesSection/>
    <Stats/>
    <FacilitiesSection/>
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