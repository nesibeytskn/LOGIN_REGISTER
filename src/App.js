
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";


function App() {
  return (
    <div className="App">
     <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
