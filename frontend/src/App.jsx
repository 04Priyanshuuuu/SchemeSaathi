<<<<<<< HEAD
import React, { useEffect, useState } from "react";

import LandingPage from "./components/LandingPage/LandingPage";
import AuthPage from "./components/AuthPage/AuthPage";
import HomePage from "./components/HomePage/HomePage";
import EMICalculator from "./components/EMICalculator/EMICalculator";
import SearchSchemes from "./components/SearchSchemes/SearchSchemes";
import RecommendedSchemes from "./components/RecommendedSchemes/RecommendedSchemes";
import UserProfile from "./components/UserProfile/UserProfile";
import FindPartners from "./components/FindPartners/FindPartners";
import Map from "./components/Map/Map";
import ContactUs from "./components/ContactUs/ContactUs";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

import "./App.css";
=======
import Auth from './components/Auth/Auth'
import HomePage from './components/Home/HomePage'
import './App.css'
>>>>>>> 99cca17b5bbc610b81f1ee85a8cb13214361d2cd

function App() {
  const [route, setRoute] = useState(window.location.hash || "#/");

<<<<<<< HEAD
  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (path) => {
    window.location.hash = path;
  };

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

    default:
      return <LandingPage />;
  }
=======
  return (
    <>
      <HomePage />
      <Auth />
    </>
  )
>>>>>>> 99cca17b5bbc610b81f1ee85a8cb13214361d2cd
}

export default App;