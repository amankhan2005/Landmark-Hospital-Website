 import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="px-4 md:py-12" data-aos="fade-up">
      <div className="container relative mx-auto h-80 flex flex-col items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-r from-[#13335b] to-[#3b628b] text-white shadow-xl px-6 md:px-12 text-center">

        {/* Center Text */}
        <p className="text-base md:text-lg font-medium uppercase tracking-wide text-white">
          Need Emergency?
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 leading-snug">
          Looking For The <span className="text-yellow-300">Best Medical</span> Solutions?
        </h2>
        <p className="mt-4 text-base md:text-lg text-white max-w-xl">
          Get reliable healthcare support from our expert team of doctors and staff.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-blue-700 font-semibold shadow-lg hover:bg-gray-100 transition duration-300 text-base md:text-lg"
        >
          Contact With Us
        </Link>

      </div>
    </div>
  );
}
