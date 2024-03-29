import React from "react";

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function AppLayout() {
  return (
    <div>
      <NavBar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
