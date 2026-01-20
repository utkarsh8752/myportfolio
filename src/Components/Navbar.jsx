import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar 
                      flex justify-center md:justify-end 
                      gap-6 md:gap-10 
                      bg-white shadow-md 
                      text-black py-4 px-6 
                      rounded-b-2xl
                      sticky top-0 z-50
                      backdrop-blur-md bg-white/60">
                        <h1>portfolio</h1>

        <Link
          to="/"
          className="text-gray-800 hover:text-blue-600 font-semibold transition-all text-lg"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-gray-800 hover:text-blue-600 font-semibold transition-all text-lg"
        >
          About
        </Link>

        <Link
          to="/skills"
          className="text-gray-800 hover:text-blue-600 font-semibold transition-all text-lg"
        >
          Skills
        </Link>

        <Link
          to="/Projects"
          className="text-gray-800 hover:text-blue-600 font-semibold transition-all text-lg"
        >
          projects
        </Link>

        <Link
          to="/contact"
          className="text-gray-800 hover:text-blue-600 font-semibold transition-all text-lg"
        >
          Contact
        </Link>
      </nav>
    </>
  )
}

export default Navbar
