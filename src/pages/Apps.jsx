import { useState, useEffect } from "react";
import AppCard from "../components/AppCard";
import Loading from "../components/Loading";
import appsData from "../data/apps";

const Apps = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState(appsData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const result = appsData.filter(app =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(result);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div>
          <h1 className="text-5xl font-bold">Our All Applications</h1>
          <p className="text-gray-600 mt-2">({filteredApps.length}) Apps Found</p>
        </div>
        <input
          type="text"
          placeholder="Search Apps..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-6 md:mt-0 w-full md:w-80 px-6 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:border-violet-500"
        />
      </div>

      {loading ? (
        <Loading />
      ) : filteredApps.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-3xl font-medium text-gray-400">No App Found</h3>
          <p className="text-gray-500 mt-4">Try searching with different keywords</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredApps.map(app => <AppCard key={app.id} app={app} />)}
        </div>
      )}
    </div>
  );
};

export default Apps;
