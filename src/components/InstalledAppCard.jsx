import toast from "react-hot-toast";

const InstalledAppCard = ({ app, onUninstall }) => {
  const handleUninstall = () => {
    onUninstall(app.id);
    toast.success(`${app.title} uninstalled successfully!`, {
      icon: '🗑️',
      duration: 3000,
    });
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 flex flex-col">
      <div className="flex gap-5">
        <img src={app.image} alt={app.title} className="w-20 h-20 rounded-2xl object-cover" />
        <div className="flex-1">
          <h3 className="font-semibold text-xl">{app.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{app.companyName}</p>
          <div className="flex items-center gap-4 mt-3 text-sm">
            <span>↓ { (app.downloads / 1000000).toFixed(1) }M</span>
            <span>★ {app.ratingAvg}</span>
          </div>
        </div>
      </div>

      <button 
        onClick={handleUninstall}
        className="mt-6 w-full bg-red-100 hover:bg-red-200 text-red-700 font-medium py-3 rounded-2xl transition-colors"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;