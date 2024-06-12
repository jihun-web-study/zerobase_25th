import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const RootLayout = () => {
  const rootStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const mainStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div style={rootStyle}>
      <Nav />
      <main style={mainStyle}>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default RootLayout;
