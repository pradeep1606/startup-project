import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/4 px-8 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6">Top Courses</h4>
              <ul>
                <li><a href="" className="text-gray-400 hover:text-white">M.B.A</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">B.Tech/B.E</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">MCA</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">BCA</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">M.Tech</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">MA</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">BA</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-8 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6">Top Universities</h4>
              <ul>
                <li><a href="" className="text-gray-400 hover:text-white">Engineering</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Management</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Medical</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Law</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Commerce</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Science</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Arts</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-8 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6">Top Exam</h4>
              <ul>
                <li><a href="" className="text-gray-400 hover:text-white">CAT</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">GATE</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Jee-Main</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">NEET</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">XAT</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">CLAT</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">MAT</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-8 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6">Study Abroad</h4>
              <ul>
                <li><a href="" className="text-gray-400 hover:text-white">Canada</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">USA</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">UK</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">UAE</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Australia</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Germany</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Sweden</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">Ireland</a></li>
                <li><a href="" className="text-gray-400 hover:text-white">New Zealand</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 px-8 mb-8 sm:mb-0">
              <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
              <div className="flex">
                <a href="" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaFacebookF />
                </a>
                <a href="" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaTwitter />
                </a>
                <a href="" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaInstagram />
                </a>
                <a href="" className="w-10 h-10 bg-white bg-opacity-20 mr-4 flex items-center justify-center rounded-full transition-colors duration-300 hover:text-gray-800 hover:bg-white">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer
