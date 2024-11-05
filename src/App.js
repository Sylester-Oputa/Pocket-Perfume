import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Privacy from "./components/Privacy";
import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Cart from "./components/CartComponents/Cart";
import Cartform from "./components/CartForm";
import Loader from "./components/CartComponents/Loader";
import Static from "./components/Static.jsx"
import "./App.css";
import Services from "./components/Services";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Cartform />} />
            <Route path="/mycart" element={<Cart />} />
            <Route path="/service" element={<Services />} />
            <Route path="/static" element={<Static />} />
          </Routes>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;