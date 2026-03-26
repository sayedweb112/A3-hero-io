import { useState, useEffect } from "react";
import InstalledAppCard from "../components/InstalledAppCard";
import toast from "react-hot-toast";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOption, setSortOption] = useState("high-low");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(saved);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter(app => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
  };

  // Sort apps
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOption === "high-low") return b.downloads - a.downloads;
    return a.downloads - b.downloads;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-5xl font-bold">Your Installed Apps</h1>
          <p className="text-gray-600 mt-2">1 Apps Found</p>
        </div>

        <select 
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-6 py-3 border border-gray-300 rounded-2xl focus:outline-none"
        >
          <option value="high-low">Sort By Size (High-Low)</option>
          <option value="low-high">Sort By Size (Low-High)</option>
        </select>
      </div>

      {sortedApps.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border">
          <h3 className="text-3xl text-gray-400">No Apps Installed Yet</h3>
          <p className="text-gray-500 mt-4">Install some apps from the Apps page</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedApps.map(app => (
            <InstalledAppCard key={app.id} app={app} onUninstall={handleUninstall} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;