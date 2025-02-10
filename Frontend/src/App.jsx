import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Route, Routes ,Navigate} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import TopNavBar from "./components/TopNavbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
          <TopNavBar/>
          <Header/>
        <Routes>
          {/* Public Pages with MainLayout */}
          <Route path="/" element={ <Home />  } />
          <Route path="/our-team" element={ <OurTeam />  } />
          <Route path="/gallery" element={ <GalleryPage />  } />
          <Route path="/contact" element={ <ContactUs />  } />
          <Route path="/about" element={ <AboutPage />  } />
          <Route path="/cases" element={ <Cases />  } />
          <Route path="/blog" element={ <BlogPage />  } />
          <Route path="/blog/:id" element={ <BlogDetailPage/>  } />
          <Route path="/specialities" element={ <Specialities />  } />
          <Route path="/specialities/:specialtyName" element={ <SpecialtyDetail />  } />
          <Route path="/facilities" element={ <FacilitiesPage />  } />
          <Route path="/facilities/:facilitiesName" element={ <FacilitiesDetail />  } />
          <Route path="/testimonials" element={ <TestimonialPage />  } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </Suspense>
    </BrowserRouter>
  );
}


export default App;
