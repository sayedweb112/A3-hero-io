import { Link } from "react-router-dom";

const AppCard = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`} className="app-card block bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-violet-200 group">
      <div className="aspect-square overflow-hidden">
        <img 
          src={app.image} 
          alt={app.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 mb-2">{app.title}</h3>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-emerald-600">
            <span>↓</span> { (app.downloads / 1000000).toFixed(1) }M
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            ★ {app.ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;