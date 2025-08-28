 import React, { useRef } from "react";

export default function YouTubePage() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const videos = [
    "https://www.youtube.com/embed/-nOLqRZLJCA?si=kwWXoJ8tGo7Gm24c",
    "https://www.youtube.com/embed/Hl4n09fYu78?si=OLU4MYRKLvUfc1HV",
    "https://www.youtube.com/embed/ZJwE5BvPRfE?si=UmIXJhUJORJMa9Yz",
    "https://www.youtube.com/embed/6VJo3CgOpfk?si=ZjS-YrX2uFL99PqE",
    "https://www.youtube.com/embed/vNINyNnYAHo?si=duK6l1suCONSwNei",
    "https://www.youtube.com/embed/-nOLqRZLJCA?si=o43P6YKyxC3kP9Q1",
    "https://www.youtube.com/embed/TuHN5sq68YI?si=BrqIhM6G_M4TyFXG",
    "https://www.youtube.com/embed/XwARUloBotE?si=eaUQxRFLs1Wpus1S",
  ];

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-primary font-bold mb-4 text-center">
          Watch Us on YouTube
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Explore health tips, awareness talks, and expert advice from our doctors.
        </p>

        <div className="relative w-full">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow bg-white hover:bg-gray-200 z-10"
          >
            &#8592;
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow bg-white hover:bg-gray-200 z-10"
          >
            &#8594;
          </button>

          {/* Video Slider */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scroll-smooth pb-4"
          >
            {videos.map((link, index) => (
              <div
                key={index}
                className="min-w-[200px] max-w-[250px] aspect-[9/16] flex-shrink-0 rounded-lg overflow-hidden shadow"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={link}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
