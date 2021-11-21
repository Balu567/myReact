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

import CssBaseline from "@mui/material/CssBaseline";

import Dashboard from "./Dashboard";
import SideMenu from "./SideMenu";
import Layout from "./Layout";
import Login from "./Login";
import Logout from "./Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <CssBaseline>
          <Layout>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/detail" element={<Details />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </Layout>
        </CssBaseline>
      </Router>
    </div>
  );
}

export default App;
