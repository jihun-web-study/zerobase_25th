import React, { memo, useEffect, useState, useCallback } from "react";

export default function C() {
  const [value, setValue] = useState(0);

  const incrementValue = useCallback(() => {
    setValue((c) => c + 1);
  }, []);

  console.log("Parent render");

  return (
    <div>
      <p>C</p>
      <form action="/" method="get">
        <input type="number" placeholder={0} inputMode="numeric" pattern="[0-9]*" />
      </form>
      <button onClick={incrementValue}>click</button>
      <Child value={value} />
    </div>
  );
}

const Child = React.memo((props) => {
  console.log("child", props.value);

  return <div>child</div>;
});
