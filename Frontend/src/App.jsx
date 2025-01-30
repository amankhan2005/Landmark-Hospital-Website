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
function App() {
  return (
    <BrowserRouter>
      <TopNavBar/>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/our-team' element={<OurTeam/>}/>
      <Route path='/gallery' element={<GalleryPage/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/cases' element={<Cases/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/specialities' element={<Specialities/>}/>
      <Route path='/specialities/:specialtyName' element={<SpecialtyDetail/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App