
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";



function App() {
  return (
    <div className="App">
     <HashRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
