import useGetPathname from "utils/useGetPathname";
import { UserContext } from "store/user";
import { useContext } from "react";

export default function A({ temperature, setTemperature }) {
  const onChageHandler = (e) => {
    setTemperature(e.target.value, temperature);
  };

  const pathname = useGetPathname();
  console.log(pathname, 1);
  const value = useContext(UserContext);

  const onClickHandler = () => {
    value.changeAge(30);
  };

  return (
    <div>
      <p>A</p>
      <input type="text" placeholder={0} onChange={onChageHandler} value={temperature} />
      <div>
        <div>{value.name}</div>
        <div>{value.age}</div>
        <button onClick={onClickHandler}>나이변경</button>
      </div>
    </div>
  );
}
