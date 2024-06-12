import { useState } from "react";
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

  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    if (targetName === "nickname") return setNickname(targetValue);
    return setPassword(targetValue);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" name="login" value={nickname} />
        <input type="password" name="password" value={password} />
      </form>
      <CustomLink to={"/a"}>A로 이동</CustomLink>
      <CustomLink to={"/b"}>B로 이동</CustomLink>
      <CustomLink to={"/c"}>C로 이동</CustomLink>
    </div>
  );
};

export default Header;
