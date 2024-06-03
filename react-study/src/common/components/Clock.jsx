import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    //console.log(date);
    setDate(new Date());
  };

  useEffect(() => {
    console.log("mount 1");
    const timerId = setInterval(tick, 1000);
    console.log("mount 2");

    return () => {
      console.log("unmount");
      clearInterval(timerId);
    };
  }, []);

  return <h3>{date.toLocaleTimeString()}</h3>;
};

export default Clock;
