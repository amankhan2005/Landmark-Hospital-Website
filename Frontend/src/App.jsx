import React from 'react'
import './App.css'
import  {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import OurTeam from './Pages/OurTeam'
import TopNavBar from './components/TopNavbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import GalleryPage from './Pages/GalleryPage'
import ContactUs from './Pages/ContactUs'
import Cases from './Pages/Cases'
import BlogPage from './Pages/BlogPage'
import Specialities from './Pages/Specilities'
import SpecialtyDetail from './components/SpecialitiesDetail'
import FacilitiesPage from './Pages/FacilitiesPage'
import FacilitiesDetail from './components/FacilitiesDetail'
import BlogDetailPage from './components/BlogDetail'
import AboutPage from './Pages/AboutPage'
import TestimonialPage from './Pages/TestimonialPage'
import ScrollToTop from './components/ScrollToTop'
function App() {
  const blogs = [
    {
      id: 1,
      title: "What is CPR",
      description: "Understand the importance of immediate action in cardiac emergencies, how CPR works, and the impact it can have. This skill can save lives in critical moments.",
      author: "Dr. Kishalay Datta",
      date: "Jan 29, 2025",
      tags: ["Emergency & Trauma"],
      image: "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_CPR_bb5dc76b72.jpg",
    },
    {
      id: 2,
      title: "Guillain-Barre Syndrome: Symptoms, Causes, and Treatment",
      description: "Learn how Guillain-Barre Syndrome affects the body and explore symptoms & treatment options. Early detection can improve outcomes.",
      author: "Dr. Rajesh Gupta",
      date: "Jan 28, 2025",
      tags: ["Neurosciences Neurology"],
      image: "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_Guillain_Barre_1_e16366ddbc.jpg",
    },

    {
      id: 3,
      title: "Managing Diabetes Effectively",
      description: "Discover tips and strategies for managing diabetes effectively, including diet, exercise, and medication.",
      author: "Dr. Asha Sharma",
      date: "Jan 27, 2025",
      tags: ["Endocrinology", "General Health"],
      image: "https://picsum.photos/150/100",
    },
    {
        id: 7,
        title: "What is CPR",
        description: "Understand the importance of immediate action in cardiac emergencies, how CPR works, and the impact it can have. This skill can save lives in critical moments.",
        author: "Dr. Kishalay Datta",
        date: "Jan 29, 2025",
        tags: ["Emergency & Trauma"],
        image: "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_CPR_bb5dc76b72.jpg",
      },
    {
      id: 4,
      title: "Advancements in Cardiac Surgery",
      description: "Explore the latest advancements in cardiac surgery and how they improve patient outcomes and recovery times.",
      author: "Dr. Vijay Kumar",
      date: "Jan 26, 2025",
      tags: ["Cardiology", "Surgery"],
      image: "https://picsum.photos/150/100",
    },
    {
      id: 5,
      title: "Understanding Mental Health",
      description: "A comprehensive guide to understanding mental health, reducing stigma, and seeking help when needed.",
      author: "Dr. Meera Iyer",
      date: "Jan 25, 2025",
      tags: ["Mental Health", "Psychology"],
      image: "https://picsum.photos/150/100",
    },
  ];
  return (
    <BrowserRouter>
    <ScrollToTop />
      <TopNavBar/>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/our-team' element={<OurTeam/>}/>
      <Route path='/gallery' element={<GalleryPage/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/cases' element={<Cases/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path="/blog/:id" element={<BlogDetailPage blogs={blogs} />} />
      <Route path='/specialities' element={<Specialities/>}/>
      <Route path='/specialities/:specialtyName' element={<SpecialtyDetail/>}/>
      <Route path='/facilities' element={<FacilitiesPage/>}/>
      <Route path='/facilities/:facilitiesName' element={<FacilitiesDetail/>}/>
      <Route path='/testimonials' element={<TestimonialPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App