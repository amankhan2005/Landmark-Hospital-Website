 import React, { useState, useEffect } from "react";

export default function TestimonialSection() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 ">
          What Our Patients Say
        </h2>
 <p className="text-gray-600 md:mb-6 mb-3 text-center text-sm md:text-base">
See why so many families choose us for their healthcare needs.        </p>
        {/* Laptop-style Frame without border/shadow */}
        <div className="mx-auto container bg-gray-900  overflow-hidden">
          {/* Top Bar */}
        

          {/* Laptop Screen */}
             {/* Google Search Bar */}
            

            {/* Google Reviews & Map */}
            <div className="bg-gray-100  overflow-hidden">
              <iframe
                src="https://widgets.sociablekit.com/google-reviews/iframe/25558445"
                frameBorder="0"
                width="100%"
                height="500"
                title="Customer Testimonials"
                className="w-full h-[500px]"
              ></iframe>
            </div>
          </div>
       
      </div>
    </section>
  );
}
