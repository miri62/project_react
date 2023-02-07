import "./App.css";

import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import About from "./components/About";
import Business from "./components/Business";
import NewCard from "./components/NewCard";
import { useState } from "react";
import AllCards from "./components/AllCards";
import MyCards from "./components/MyCards";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  let [isBussines, setIsBussines] = useState<boolean>(false);
  let [isLoggedin, setIsLoggedin] = useState<boolean>(false);

  return (
    <>
      <ToastContainer />

      <Router>
        <Nav
          isBussines={isBussines}
          isLoggedin={isLoggedin}
          setIsLoggedin={setIsLoggedin}
        />
        <Routes>
          <Route
            path="/sign-in"
            element={
              <Signin
                setIsBussines={setIsBussines}
                setIsLoggedin={setIsLoggedin}
              />
            }
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/sign-up"
            element={<Signup setIsLoggedin={setIsLoggedin} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/bussines"
            element={
              <Business
                setIsLoggedin={setIsLoggedin}
                setIsBussines={setIsBussines}
              />
            }
          />
          <Route path="/new-card" element={<NewCard />} />
          <Route path="/all-cards" element={<AllCards />} />
          <Route path="/my-cards" element={<MyCards />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
