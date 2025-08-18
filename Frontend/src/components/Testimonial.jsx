 import React, { useState, useEffect } from "react";

export default function TestimonialSection() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          What Our Patients Say
        </h2>

        {/* Laptop-style Frame without border/shadow */}
        <div className="mx-auto container bg-gray-900 rounded-3xl overflow-hidden">
          {/* Top Bar */}
        

          {/* Laptop Screen */}
          <div className="bg-white container p-4 overflow-hidden">
            {/* Google Search Bar */}
            

            {/* Google Reviews & Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
      </div>
    </section>
  );
}
