export default function TopNavBar() {
    return (
      <header className="bg-primary text-white">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          {/* Left side: Email and Address */}
          <div className="flex items-center space-x-6">
            <span className="md:flex hidden items-center space-x-2">
              <i className="fas fa-envelope"></i>
              <span>info@hopeHospital.com</span>
            </span>
            <span className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt"></i>
              <span className="md:text-base text-xs line-clamp-1">Gonda Road, Near Vinayak Resorts, Bharaich - 271801 (U.P.)</span>
            </span>
          </div>
  
          {/* Right side: Social media icons */}
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-gray-200"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-gray-200"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-200"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-gray-200"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover:text-gray-200"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-gray-200"><i className="fab fa-google-plus-g"></i></a>
          </div>
        </div>
      </header>
    );
  }
  