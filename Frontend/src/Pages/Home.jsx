import React, { Suspense, lazy } from 'react';
import HeroSlider from '../components/HeroSlide'; // Load Immediately (Critical Content)

const AboutSection = lazy(() => import('../components/About'));
const OurTeam = lazy(() => import('../components/OurTeam2'));
const Stats = lazy(() => import('../components/Stats'));
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const Gallery = lazy(() => import('../components/Gallery'));
const ContactUs = lazy(() => import('../components/ContactUs'));
const HowWeWork = lazy(() => import('../components/HowWeWork'));
const BlogComponent = lazy(() => import('../components/BlogSection'));
const SpecialitiesSection = lazy(() => import('../components/SpecialitiesSection'));
const FacilitiesSection = lazy(() => import('../components/FacilitiesSection'));

function Home() {
  return (
    <>
      {/* Load HeroSlider Immediately for Faster FCP */}
      <HeroSlider />  

      {/* Lazy Load the Rest */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <AboutSection />
        <SpecialitiesSection />
        <Stats />
        <FacilitiesSection />
        <HowWeWork />
        <OurTeam />
        <WhyChooseUs />
        <ContactUs />
        <Gallery />
        <BlogComponent />
      </Suspense>
    </>
  );
}

export default React.memo(Home);
