import React, { useReducer } from "react";

const ReducerPage = () => {
  const init = { count: 0 };

  function reducer(state, action) {
    let key = action.key || "";

    switch (action.type) {
      case "inc":
        return { count: state.count + 1 };
      case "dec":
        return { count: state.count - 1 };
      case "clear":
        return { count: 0 };
      case "addType":
        return { ...state, key: action.value };
      default:
        throw new Error("No Type");
    }
  }

  const [state, dispatch] = useReducer(reducer, init);

  const onClickHandler = (type) => () => {
    dispatch({ type });
  };

  const addState = () => {
    dispatch({ type: "addType", key: "test", value: "Hi" });
  };

  return (
    <div>
      <h1>ReducerPage</h1>
      <div>
        <div>Count: {state.count}</div>
        <div>
          {Object.entries(state).map(([key, value], idx) => (
            <div key={idx}>
              {key}:{value}
            </div>
          ))}
        </div>
        <button onClick={onClickHandler("dec")}>-</button>
        <button onClick={onClickHandler("clear")}>clear</button>
        <button onClick={onClickHandler("inc")}>+</button>
        <button onClick={addState}>new state</button>
      </div>
    </div>
  );
};

export default ReducerPage;
