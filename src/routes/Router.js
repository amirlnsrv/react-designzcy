import React from "react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Admin } from "../pages/admin";

function Router() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default Router;
