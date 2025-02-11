import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import TopNavBar from "./components/TopNavbar";
import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./Pages/Home";  


const Appoinment  = lazy(()=>import( "./Pages/Appointment"));
const OurTeam = lazy(() => import("./Pages/OurTeam"));
const GalleryPage = lazy(() => import("./Pages/GalleryPage"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Cases = lazy(() => import("./Pages/Cases"));
const BlogPage = lazy(() => import("./Pages/BlogPage"));
const Specialities = lazy(() => import("./Pages/Specilities"));
const SpecialtyDetail = lazy(() => import("./components/SpecialitiesDetail"));
const FacilitiesPage = lazy(() => import("./Pages/FacilitiesPage"));
const FacilitiesDetail = lazy(() => import("./components/FacilitiesDetail"));
const BlogDetailPage = lazy(() => import("./components/BlogDetail"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const TestimonialPage = lazy(() => import("./Pages/TestimonialPage"));

const LoadingSpinner = () => (
  <div className="flex justify-center flex-col items-center h-screen">
    {/* <span className="tracking-wider md:text-5xl text-2xl font-bold messiri text-blue-800  duration-1000">
      Welcome To
    </span>
    <div className="font-bold text-2xl messiri">Hope Hospital</div> */}
    <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-800"></div>
  </div>
);

const App=()=>{
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <TopNavBar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/our-team"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <OurTeam />
            </Suspense>
          }
        />
        <Route
          path="/gallery"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <GalleryPage />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/cases"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Cases />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogPage />
            </Suspense>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogDetailPage />
            </Suspense>
          }
        />
        <Route
          path="/specialities"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Specialities />
            </Suspense>
          }
        />
        <Route
          path="/specialities/:specialtyName"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <SpecialtyDetail />
            </Suspense>
          }
        />
        <Route
          path="/facilities"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FacilitiesPage />
            </Suspense>
          }
        />
        <Route
          path="/facilities/:facilitiesName"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <FacilitiesDetail />
            </Suspense>
          }
        />
        <Route
          path="/testimonials"
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <TestimonialPage />
            </Suspense>
          }
        />
        <Route path="/Appointment" element={<Appoinment />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* 🔥 Load Footer Instantly for Faster FCP */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
