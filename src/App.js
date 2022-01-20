import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
// import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
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

export default App;
