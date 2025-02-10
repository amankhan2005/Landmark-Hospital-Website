export default function TopNavBar() {
    return (
      <header className="bg-primary text-white">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          {/* Left side: Email and Address */}
          <div className="flex items-center space-x-6">
            <span className="md:flex hidden items-center space-x-2 hover:cursor-pointer hover:scale-x-105 ease-in-out transition-all duration-500">
              <i className="fas fa-envelope"></i>
              <span>info@hopehospital.com</span>
            </span>
            <a href="https://maps.app.goo.gl/zfh654X2njSzau8R6" className="flex items-center space-x-2 hover:scale-x-105 ease-in-out transition-all duration-500">
              <i className="fas fa-map-marker-alt"></i>
              <span className="md:text-base text-xs line-clamp-1">Gonda Road, Near Vinayak Resorts, Bahraich - 271801 (U.P.)</span>
            </a>
          </div>
  
          {/* Right side: Social media icons */}
          <div className="flex md:space-x-6 space-x-3 md:text-lg text-sm">
            <a href="#" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-gray-200 hover:scale-110 transition-all ease-in-out duration-300"><i className="fab fa-google-plus-g"></i></a>
          </div>
        </div>
      </header>
    );
  }
  