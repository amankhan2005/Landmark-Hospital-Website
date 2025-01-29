import photo from '../assets/home/contactus-doctor.png'
export default function ContactUs() {
    return (
        <div className='md:py-12 mt-10 lg:pt-14 lg:pb-10 py-10'>
      <div className="bg-blue-500 relative  text-white p-12 rounded-2xl flex flex-col md:flex-row items-center md:justify-between max-w-6xl mx-auto">
        <div className="">
          <p className="text-base font-semibold">Need Emergency?</p>
          <h2 className="text-4xl font-bold mt-2">Looking For The Best Medical Solutions?</h2>
          <button className="mt-4 bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">Contact With Us</button>
        </div>
        <div className=" right-0 bottom-0 absolute mt-6 md:mt-0">
          <img src={photo} alt="Doctor" className="w-64 object-cover" />
        </div>
      </div>
      </div>
    );
  }
  