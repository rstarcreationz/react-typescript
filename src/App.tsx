import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { Register } from "./Components/Auth/Register";
import { FamilyList } from "./Container/FamilyManagement/FamilyList";
import Footer from "./Components/Includes/Footer";
import Header from "./Components/Includes/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Components/TheLayout/Layout";
import "./assets/stylesheet/style.css";
import WebHome from "./Components/TheWebPage/WebHome";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/family-management" element={<FamilyList />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Layout />} />
          <Route path="/web" element={<WebHome />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
