import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
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


// Fallback Loader Component
const LoadingSpinner = () => (
  <div className="flex justify-center flex-col items-center h-screen">
  <span className="tracking-wider md:text-5xl text-2xl font-bold messiri text-blue-800  duration-1000">Welcome To</span>
   {/* <img src={logo} loading="lazy" className="h-28 w-64"/> */}
   <div className="font-bold text-2xl messiri">Hope Hospital</div>
   <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-800">
   </div>
 </div>
);

function App() {
 const blogs = [
    {
      id: 1,
      title: "What is CPR",
      description:
        "Understand the importance of immediate action in cardiac emergencies, how CPR works, and the impact it can have. This skill can save lives in critical moments.",
      author: "Dr. Kishalay Datta",
      date: "Jan 29, 2025",
      tags: ["Emergency & Trauma"],
      image:
        "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_CPR_bb5dc76b72.jpg",
    },
    {
      id: 2,
      title: "Guillain-Barre Syndrome: Symptoms, Causes, and Treatment",
      description:
        "Learn how Guillain-Barre Syndrome affects the body and explore symptoms & treatment options. Early detection can improve outcomes.",
      author: "Dr. Rajesh Gupta",
      date: "Jan 28, 2025",
      tags: ["Neurosciences Neurology"],
      image:
        "https://max-website20-images.s3.ap-south-1.amazonaws.com/medium_Guillain_Barre_1_e16366ddbc.jpg",
    },
    {
      id: 3,
      title: "Managing Diabetes Effectively",
      description:
        "Discover tips and strategies for managing diabetes effectively, including diet, exercise, and medication.",
      author: "Dr. Asha Sharma",
      date: "Jan 27, 2025",
      tags: ["Endocrinology", "General Health"],
      image: "https://picsum.photos/150/100",
    },
    {
      id: 4,
      title: "Advancements in Cardiac Surgery",
      description:
        "Explore the latest advancements in cardiac surgery and how they improve patient outcomes and recovery times.",
      author: "Dr. Vijay Kumar",
      date: "Jan 26, 2025",
      tags: ["Cardiology", "Surgery"],
      image: "https://picsum.photos/150/100",
    },
    {
      id: 5,
      title: "Understanding Mental Health",
      description:
        "A comprehensive guide to understanding mental health, reducing stigma, and seeking help when needed.",
      author: "Dr. Meera Iyer",
      date: "Jan 25, 2025",
      tags: ["Mental Health", "Psychology"],
      image: "https://picsum.photos/150/100",
    },
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
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}


export default App;
