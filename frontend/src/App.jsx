import React, { useEffect, useState } from "react";

import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/Authpage";
import HomePage from "./pages/HomePage";
import EMICalculator from "./pages/EMICalculator";
import SearchSchemes from "./pages/SearchSchemes";
import RecommendedSchemes from "./pages/RecommendedSchemes";
import UserProfile from "./pages/UserProfile";
import FindPartners from "./pages/FindPartners";
import Map from "./components/Map";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || "#/");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigate = (path) => {
    window.location.hash = path;
  };

  const renderPage = () => {
    switch (route) {
      case "#/auth":
        return <AuthPage />;

      case "#/home":
        return <HomePage />;

      case "#/emi":
        return <EMICalculator />;

      case "#/schemes":
        return <SearchSchemes />;

      case "#/recommended":
        return <RecommendedSchemes />;

      case "#/profile":
        return <UserProfile />;

      case "#/partners":
        return <FindPartners />;

      case "#/map":
        return <Map />;

      case "#/contact":
        return <ContactUs />;

      case "#/privacy":
        return <PrivacyPolicy />;

      case "#/":
      default:
        return <LandingPage />;
    }
  };

  return <div className="w-full min-h-screen">{renderPage()}</div>;
}

export default App;
