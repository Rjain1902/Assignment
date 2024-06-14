import React from "react";
import Headers from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
export function Layout(props) {
  return (
    <>
      <Headers />
      <div style={{height:'450px'}}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
