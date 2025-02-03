import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import logo from './assets/hope-logo.png';
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

// Lazy Load Admin Pages
const TeamForm = lazy(() => import("./admin/pages/components/SaveTeam"));

// Fallback Loader Component
const LoadingSpinner = () => (
  <div className="flex justify-center flex-col items-center h-screen">
  <span className="tracking-wider text-5xl font-bold messiri text-blue-600 animate-ping duration-1000">Welcome To</span> <img src={logo} loading="lazy" className="h-28 w-64"/>
   <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-500">
   </div>
 </div>
);

function App() {
  const blogs = [
    { id: 1, title: "What is CPR", author: "Dr. Kishalay Datta", date: "Jan 29, 2025", image: "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_CPR_bb5dc76b72.jpg" },
    { id: 2, title: "Guillain-Barre Syndrome", author: "Dr. Rajesh Gupta", date: "Jan 28, 2025", image: "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_Guillain_Barre_1_e16366ddbc.jpg" },
  ];

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
          <Route path="/blog/:id" element={<MainLayout><BlogDetailPage blogs={blogs} /></MainLayout>} />
          <Route path="/specialities" element={<MainLayout><Specialities /></MainLayout>} />
          <Route path="/specialities/:specialtyName" element={<MainLayout><SpecialtyDetail /></MainLayout>} />
          <Route path="/facilities" element={<MainLayout><FacilitiesPage /></MainLayout>} />
          <Route path="/facilities/:facilitiesName" element={<MainLayout><FacilitiesDetail /></MainLayout>} />
          <Route path="/testimonials" element={<MainLayout><TestimonialPage /></MainLayout>} />

          {/* Admin Panel with AdminLayout */}
          <Route path="/admin" element={<AdminLayout><TeamForm /></AdminLayout>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
