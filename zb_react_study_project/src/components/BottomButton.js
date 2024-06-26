import React, { Children } from "react";
import { useRouter } from "next/router";

export default function BottomButton({ routeURL, query, children }) {
  const router = useRouter();

  const onClickHandler = (e) => {
    e.stopPropagation();
    console.log("clicked");
    console.log(routeURL, query, children);

    router.push({
      pathname: routeURL || "",
      query,
    });
  };

  const buttonStyles = {
    position: "absolute",
    left: "50%",
    bottom: "24px",
    width: "90%",
    height: "30px",
    padding: "0px",
    transform: "translateX(-50%)",
  };

  return (
    <button style={buttonStyles} onClick={onClickHandler}>
      {children}
    </button>
  );
}
