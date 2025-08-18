import React, { useState, useEffect, useRef } from "react";
import { FaSun, FaMoon, FaSearch } from "react-icons/fa";
import logoDark from "../assets/home/youtube-logo-dark.png";
import logoLight from "../assets/home/youtube-logo-light.png";
import channelLogo from "../assets/home/landmark-yt-logo.jpg";

const API_KEY = "AIzaSyDwTMUnWdtmTjODTuuVcqF-6E6-b5bubDU";
const CHANNEL_ID = "UCj01ooLsuMVL9TJmargZz4g";
const MAX_RESULTS = 20;
const CHANNEL_URL = `https://www.youtube.com/channel/${CHANNEL_ID}`;

export default function YouTubePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [videos, setVideos] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const searchRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );
        const searchData = await searchRes.json();

        const videoIds = searchData.items
          ?.filter((item) => item.id.kind === "youtube#video")
          .map((item) => item.id.videoId);

        if (!videoIds || videoIds.length === 0) return;

        const videosRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds.join(
            ","
          )}&part=snippet,contentDetails,statistics`
        );
        const videosData = await videosRes.json();

        setVideos(videosData.items || []);
      } catch (err) {
        console.error("Failed to fetch YouTube videos", err);
      }
    };

    fetchVideos();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const filteredVideos = videos.filter((video) =>
    video.snippet.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDuration = (duration) => {
    const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);
    const minutes = match?.[1] ? match[1] : "0";
    const seconds = match?.[2] ? match[2].padStart(2, "0") : "00";
    return `${minutes}:${seconds}`;
  };

  return (
    <div
      className={`  bg-gray-50 flex flex-col items-center p-6 transition-colors duration-300  `}
    >
      {/* Page Heading */}
      <h2
        className={`text-4xl  text-gray-800 font-bold mb-12  `}
      >
        Watch Us on YouTube
      </h2>

      <div
        className={`mx-auto rounded-3xl shadow-2xl overflow-hidden w-full container transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-white"
          }`}
      >
        {/* Laptop Top Bar */}
         

        {/* Header */}
        <header
          className={`flex items-center justify-between p-3 border-b transition-colors duration-300 ${darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-300"
            }`}
        >
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo"
            className="h-12"
          />
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className={`rounded-l-full px-4 py-1 focus:outline-none border transition-colors duration-300 ${darkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-300 text-black"
                }`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className={`px-4 p-2 rounded-r-full border transition-colors duration-300 ${darkMode
                  ? "bg-gray-700 border-gray-600"
                  : "bg-gray-100 border-gray-300"
                }`}
            >
              <FaSearch className={darkMode ? "text-white" : "text-gray-600"} />
            </button>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </button>
        </header>

        {/* Channel Info */}
        <main className="p-6">
          <div
            className={`flex items-center justify-between p-4 rounded-md transition-colors duration-300 ${darkMode ? "bg-gray-800" : "bg-white"
              }`}
          >
            <div className="flex items-center gap-4">
              <img
                src={channelLogo}
                alt="Channel Logo"
                className="w-16 h-16 rounded-full border"
              />
              <div>
                <h2
                  className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"
                    }`}
                >
                  Landmark Advance Neurospine Care Hospital
                </h2>
                <p
                  className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                >
                  @landmarkadvanceneurospinecare
                </p>
                <p
                  className={`text-xs mt-1 ${darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                >
                  Dr. Rahul Singh is a highly experienced neurosurgeon based in
                  Lucknow
                </p>
                <a
                  href={CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block bg-red-600 text-white px-4 py-1 rounded-full font-medium hover:bg-red-700"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>

          {/* YouTube Gallery */}
          <div
            className={`mt-6 relative rounded-xl p-4 shadow transition-colors duration-300 ${darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-300"
              }`}
          >
            <h2
              className={`text-2xl font-bold mb-4 text-center ${darkMode ? "text-white" : "text-gray-800"
                }`}
            >
              Our YouTube Videos
            </h2>

            {/* Scroll buttons */}
            <button
              onClick={() => scroll("left")}
              className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow z-10 transition-colors duration-300 ${darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-white hover:bg-gray-200 text-black"
                }`}
            >
              &#8592;
            </button>
            <button
              onClick={() => scroll("right")}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow z-10 transition-colors duration-300 ${darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-white hover:bg-gray-200 text-black"
                }`}
            >
              &#8594;
            </button>

            {/* Videos */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-3 scroll-smooth pb-2"
            >
              {filteredVideos.length > 0 ? (
                filteredVideos.map((video) => (
                  <div
                    key={video.id}
                    className={`min-w-[160px] flex-shrink-0 rounded-md shadow hover:shadow-lg transform transition-all duration-200 border ${darkMode
                        ? "bg-gray-700 border-gray-600"
                        : "bg-white border-gray-200"
                      }`}
                    style={{ minHeight: "180px" }}
                  >
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="relative w-full aspect-video">
                        <img
                          src={video.snippet.thumbnails.high.url}
                          alt={video.snippet.title}
                          className="w-full h-full object-cover rounded-t-md"
                        />
                        <span className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-xs px-1 rounded">
                          {formatDuration(video.contentDetails.duration)}
                        </span>
                      </div>
                      <div className="p-2 text-left">
                        <h3
                          className={`text-xs font-medium line-clamp-2 ${darkMode ? "text-white" : "text-gray-800"
                            }`}
                        >
                          {video.snippet.title}
                        </h3>
                        <p
                          className={`text-[10px] mt-1 ${darkMode ? "text-gray-300" : "text-gray-500"
                            }`}
                        >
                          {video.snippet.channelTitle} •{" "}
                          {Number(
                            video.statistics.viewCount
                          ).toLocaleString()}{" "}
                          views
                        </p>
                      </div>
                    </a>
                  </div>
                ))
              ) : (
                <p
                  className={`col-span-3 text-center ${darkMode ? "text-gray-300" : "text-gray-800"
                    }`}
                >
                  No videos found
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
