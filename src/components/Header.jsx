import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10  flex items-center justify-center text-white text-4xl">
            <img src={logo} alt="logo" />
          </div>
          <span className="text-3xl font-bold tracking-tighter text-violet-700">
            HERO.IO
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-9 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-violet-600 font-semibold"
                : "hover:text-gray-800 transition-colors"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive
                ? "text-violet-600 font-semibold"
                : "hover:text-gray-800 transition-colors"
            }
          >
            Apps
          </NavLink>

          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive
                ? "text-violet-600 font-semibold"
                : "hover:text-gray-800 transition-colors"
            }
          >
            Installation
          </NavLink>
        </nav>

        {/* GitHub Button (SVG used) */}
        <a
          href="https://github.com"
          target="_blank"
          className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 font-medium transition-all"
        >
          {/* GitHub SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.725-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.288-1.552 3.294-1.23 3.294-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          Contribute
        </a>

      </div>
    </header>
  );
};

export default Header;