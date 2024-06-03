import "./Header.css";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Header = () => {
  const currentUrl = window.location.href;
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const CustomLink = ({ children }) => {
    return <Link to={"/a"}>{children}</Link>;
  };

  return (
    <div>
      <CustomLink to={"/a"}>A로 이동</CustomLink>
      <CustomLink to={"/b"}>B로 이동</CustomLink>
      <CustomLink to={"/c"}>C로 이동</CustomLink>
    </div>
  );
};

export default Header;
