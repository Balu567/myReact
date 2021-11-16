import React from "react";
import "./App.css";

import Details from "./Details";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import First from "./First";
import SideMenu from "./SideMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Details />} />
          <Route path="/first" element={<First />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
