import React from "react";
import "./App.css";

import Details from "./Details";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const name = <h1> balu</h1>;
  return (
    <div className="App">
      <Header />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
