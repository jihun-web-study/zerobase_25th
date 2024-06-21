import React, { useContext } from "react";
import { UserContext } from "store/user";

const ContextPage = () => {
  const value = useContext(UserContext);

  console.log(value.age);

  const onClickHandler = () => {
    value.changeAge(20);
  };

  return (
    <>
      <div>ContextPage</div>
      <div>
        <div>{value.name}</div>
        <div>{value.age}</div>
      </div>
      <button onClick={onClickHandler}>나이변경</button>
    </>
  );
};

export default ContextPage;
