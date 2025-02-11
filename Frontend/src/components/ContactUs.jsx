import { Link } from 'react-router-dom';
import photo from '../assets/home/contactus-doctor.webp'
export default function ContactUs() {
    return (
        <div className='md:py-12  lg:pt-14 lg:pb-10 px-2' data-aos='fade-up'>
      <div className="bg-primary relative  text-white md:p-12 py-2 px-3 rounded-2xl flex flex-col md:flex-row items-center md:justify-between max-w-6xl mx-auto">
        <div className="">
          <p className="text-base font-semibold">Need Emergency?</p>
          <h2 className="md:text-2xl lg:text-4xl text-lg font-bold mt-2">Looking For The Best Medical Solutions?</h2>
          <Link to='/contact' className="md:mt-6 mt-2 inline-block bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">Contact With Us</Link>
        </div>
        <div className=" md:right-0 right-0 bottom-0 absolute mt-6 md:mt-0">
          <img src={photo} alt="Doctor" className="md:w-64 w-24 object-cover" />
        </div>
      </div>
      </div>
    );
  }
  