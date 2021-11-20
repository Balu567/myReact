import React from "react";
import "./App.css";
import theme from "./theme";
import Details from "./Details";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import SideMenu from "./SideMenu";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Details />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
