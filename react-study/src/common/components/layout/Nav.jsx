import React from "react";
import { Link } from "react-router-dom";
import useGetPathname from "utils/useGetPathname";

const Nav = () => {
  const pathname = useGetPathname();
  console.log(pathname);

  const navStyle = {
    width: "100%",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alginItems: "center",
    gap: "12px",
  };

  return (
    <nav style={navStyle}>
      <Link to={"/a"}>A</Link>
      <Link to={"/b"}>B</Link>
      <Link to={"/c"}>C</Link>
      <Link to={"/lottery"}>Lottery</Link>
      <Link to={"/reducer"}>Reducer</Link>
    </nav>
  );
};

export default Nav;
