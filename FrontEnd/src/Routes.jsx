import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Puzz from "pages/Games/Puzz/puzz";
import XO from "pages/Games/XO/tictac";
import Pendu from "pages/Games/Pendu/pendu";
import Go from "pages/Games/Go/go";
import Remember from "pages/Games/Remember/remember";

const Homepage = React.lazy(() => import("pages/Homepage"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const Orderonline = React.lazy(() => import("pages/Orderonline"));
const Contact = React.lazy(() => import("pages/Contact"));
const Reservation = React.lazy(() => import("pages/Reservation"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Login = React.lazy(() => import("pages/Login"));
const Menu = React.lazy(() => import("pages/Menu"));
const Signup = React.lazy(() => import("pages/Signup"));
const Myreservations = React.lazy(() => import("pages/Myreservations"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
<df-messenger
  intent="WELCOME"
  chat-title="ihebsahli"
  agent-id="c6669167-37c0-485a-82e5-fdddc4a42cd0"
  language-code="en"
></df-messenger>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Myreservations" element={<Myreservations />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orderonline" element={<Orderonline />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/puzz" element={<Puzz/>} />
          <Route path="/tictactoc" element={<XO/>} />
          <Route path="/pendu" element={<Pendu/>} />
          <Route path="/guessthenumber" element={<Go/>} />
          <Route path="/remember" element={<Remember/>} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
