import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import toast from "react-hot-toast";
import appsData from "../data/apps";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const foundApp = appsData.find(a => a.id === parseInt(id));
    if (!foundApp) {
      navigate("/not-found-app");
      return;
    }
    setApp(foundApp);

    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    setIsInstalled(installed.some(a => a.id === parseInt(id)));
  }, [id, navigate]);

  const handleInstall = () => {
    if (!app) return;

    let installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    
    if (!installed.some(a => a.id === app.id)) {
      installed.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installed));
      setIsInstalled(true);
      toast.success("App installed successfully!", { icon: '🎉' });
    }
  };

  if (!app) return null;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Image */}
        <div>
          <img 
            src={app.image} 
            alt={app.title}
            className="rounded-3xl w-full aspect-square object-cover shadow-xl"
          />
        </div>

        {/* Right - Info */}
        <div>
          <h1 className="text-5xl font-bold leading-tight">{app.title}</h1>
          <p className="text-violet-600 mt-2">Developed by {app.companyName}</p>

          <div className="flex gap-10 mt-10">
            <div>
              <div className="text-4xl font-bold">{(app.downloads/1000000).toFixed(1)}M</div>
              <div className="text-gray-500">Downloads</div>
            </div>
            <div>
              <div className="text-4xl font-bold">★ {app.ratingAvg}</div>
              <div className="text-gray-500">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{(app.reviews/1000)}K</div>
              <div className="text-gray-500">Reviews</div>
            </div>
          </div>

          <button 
            onClick={handleInstall}
            disabled={isInstalled}
            className={`mt-10 w-full py-5 text-xl font-semibold rounded-3xl transition-all ${
              isInstalled 
                ? "bg-gray-300 text-gray-700 cursor-not-allowed" 
                : "bg-emerald-600 hover:bg-emerald-700 text-white"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Ratings</h2>
        <div className="bg-white p-8 rounded-3xl border">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={app.ratings}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8b5cf6" radius={8} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="mt-20 max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">Description</h2>
        <div className="text-gray-700 leading-relaxed text-lg space-y-6">
          {app.description}
          <p className="pt-6">This app is designed to help you stay productive and focused throughout your day.</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;