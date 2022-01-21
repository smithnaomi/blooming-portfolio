import React from "react";

import Header from "../components/Header";
import About from "./About";
// import Projects from "./components/Projects";
import Footer from "../components/Footer";

export default function PortfolioContainer() {
  return (
    <div className="App">
      NCS
      <Header></Header>
      {/* <Projects></Projects> */}
      <About></About>
      <Footer></Footer>
    </div>
  );
}
