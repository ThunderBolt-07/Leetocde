import React from "react";

import "./index.css";
import Login from "./Components/SignIn/Login.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/LogIn" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
