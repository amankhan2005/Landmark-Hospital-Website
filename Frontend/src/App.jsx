import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";
// Lazy Load Pages
const Home = lazy(() => import("./Pages/Home"));
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
  <span className="tracking-wider md:text-5xl text-2xl font-bold messiri text-blue-800  duration-1000">Welcome To</span>
   <div className="font-bold text-2xl messiri">Hope Hospital</div>
   <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-800">
   </div>
 </div>
);

function App() {

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
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Public Pages with MainLayout */}
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/our-team" element={<MainLayout><OurTeam /></MainLayout>} />
          <Route path="/gallery" element={<MainLayout><GalleryPage /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><ContactUs /></MainLayout>} />
          <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
          <Route path="/cases" element={<MainLayout><Cases /></MainLayout>} />
          <Route path="/blog" element={<MainLayout><BlogPage /></MainLayout>} />
          <Route path="/blog/:id" element={<MainLayout><BlogDetailPage/></MainLayout>} />
          <Route path="/specialities" element={<MainLayout><Specialities /></MainLayout>} />
          <Route path="/specialities/:specialtyName" element={<MainLayout><SpecialtyDetail /></MainLayout>} />
          <Route path="/facilities" element={<MainLayout><FacilitiesPage /></MainLayout>} />
          <Route path="/facilities/:facilitiesName" element={<MainLayout><FacilitiesDetail /></MainLayout>} />
          <Route path="/testimonials" element={<MainLayout><TestimonialPage /></MainLayout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}


export default App;
