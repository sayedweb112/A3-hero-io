import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Installation from "./pages/Installation";
import AppDetails from "./pages/AppDetails";
import NotFound from "./pages/NotFound";

import Loading from "./components/Loading"; // 👈 Lottie Loader import

function App() {
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    // Fake delay 800ms (can adjust)
    const timer = setTimeout(() => {
      setAppLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (appLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/app/:id" element={<AppDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster position="top-center" richColors />
    </Router>
  );
}

export default App;