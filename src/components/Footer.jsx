import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-gray-300 mt-20">

      {/* Top Gradient Border */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-purple-600"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Brand + Slogan */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 pb-12 border-b border-gray-800/70">

          {/* Logo + Brand Info */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-tr from-violet-600 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg shadow-purple-500/40">
              ⚡
            </div>

            <div>
              <h2 className="text-4xl font-extrabold text-white tracking-wide">
                HERO.IO
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Empowering your next digital journey ✨
              </p>
            </div>
          </div>

          {/* Slogan */}
          <div>
            <p className="text-gray-300 text-lg font-medium max-w-lg leading-relaxed">
              “We create smart solutions that inspire creativity and enable
              powerful modern web experiences.”
            </p>

            <p className="text-violet-400 mt-2 font-semibold tracking-wide text-sm">
              🚀 Innovate • Create • Grow
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-10 py-10">

          {/* Facebook */}
          <a href="#" className="hover:scale-110 transition transform">
            <svg
              fill="#3b82f6"
              className="w-8 h-8 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.404.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.404 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className="hover:scale-110 transition transform">
            <svg
              fill="#ec4899"
              className="w-8 h-8 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.6)] transition-all"
              viewBox="0 0 24 24"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 100 10A5 5 0 0012 7zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
            </svg>
          </a>

          {/* YouTube */}
          <a href="#" className="hover:scale-110 transition transform">
            <svg
              fill="#ef4444"
              className="w-8 h-8 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.6)] transition-all"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a2.974 2.974 0 00-2.093-2.1C19.658 3.5 12 3.5 12 3.5s-7.658 0-9.405.586a2.974 2.974 0 00-2.093 2.1A31.35 31.35 0 000 12a31.35 31.35 0 00.502 5.814 2.974 2.974 0 002.093 2.1C4.342 20.5 12 20.5 12 20.5s7.658 0 9.405-.586a2.974 2.974 0 002.093-2.1A31.35 31.35 0 0024 12a31.35 31.35 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" className="hover:scale-110 transition transform">
            <svg
              fill="#0ea5e9"
              className="w-8 h-8 hover:drop-shadow-[0_0_10px_rgba(14,165,233,0.6)] transition-all"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.771C.792 0 0 .774 0 1.729V22.27C0 23.226.792 24 1.771 24H22.23C23.207 24 24 23.226 24 22.271V1.729C24 .774 23.207 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.633a2.067 2.067 0 110-4.134 2.067 2.067 0 010 4.134zM20.452 20.452h-3.561v-5.748c0-1.372-.027-3.136-1.91-3.136-1.913 0-2.204 1.495-2.204 3.034v5.85h-3.56V9h3.4v1.561h.05c.474-.9 1.633-1.85 3.36-1.85 3.594 0 4.255 2.366 4.255 5.444v6.297z" />
            </svg>
          </a>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Terms</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Tutorials</li>
              <li className="hover:text-white cursor-pointer">Community</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center pt-10 text-sm text-gray-400 tracking-wide">
          © 2026 HERO.IO — All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 