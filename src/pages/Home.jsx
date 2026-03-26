import { Link } from "react-router-dom";
import AppCard from "../components/AppCard";
import appsData from "../data/apps";
import hero from "../assets/hero.png"

const Home = () => {
  const trendingApps = appsData.slice(0, 8);

  return (
    <div>
      {/* Banner */}
      <section className="bg-gradient-to-br from-violet-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            We Build <span className="text-violet-600">Productive Apps</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-16"
              />
            </a>

            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-16"
              />
            </a>
            {/* Hero Image Centered */}

            <div className="flex justify-center mt-8">
              <img
                src={hero}
                alt="hero"
                className="w-full max-w-3xl mx-auto"
              />
            </div>
          </div>

        </div>

      </section>


      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700">
        <div className="max-w-5xl mx-auto px-6 text-center mb-10">
          <h3 className="text-4xl text-violet-200 font-semibold">Trusted By Millions, Built For You</h3>
        </div>

        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 text-center shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-extrabold text-white drop-shadow-lg">29.6M</div>
            <div className="text-violet-100 mt-2 text-lg">Total Downloads</div>
          </div>

          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 text-center shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-extrabold text-white drop-shadow-lg">906K</div>
            <div className="text-violet-100 mt-2 text-lg">Total Reviews</div>
          </div>

          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-10 text-center shadow-xl hover:scale-105 transition-all duration-300">
            <div className="text-5xl font-extrabold text-white drop-shadow-lg">132+</div>
            <div className="text-violet-100 mt-2 text-lg">Active Apps</div>
          </div>
        </div>
      </section>

      {/* Trending Apps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl font-bold">Trending Apps</h2>
              <p className="text-gray-600 mt-2">
                Explore All Trending Apps on the Market developed by us
              </p>
            </div>

            <Link
              to="/apps"
              className="bg-violet-600 text-white px-8 py-3 rounded-2xl hover:bg-violet-700"
            >
              Show All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trendingApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;