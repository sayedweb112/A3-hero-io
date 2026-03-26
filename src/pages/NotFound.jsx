import { Link } from "react-router-dom";
import NotFoundImg from "../assets/error-404.png"; // 

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <img 
          src={NotFoundImg} 
          alt="Not Found" 
          className="w-72 mx-auto mb-6"
        />
        <h2 className="text-5xl font-bold -mt-10">Oops, page not found!</h2>
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          The page you are looking for is not available.
        </p>

        <Link 
          to="/"
          className="mt-10 inline-block bg-violet-600 text-white px-10 py-4 rounded-2xl text-lg font-medium hover:bg-violet-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;