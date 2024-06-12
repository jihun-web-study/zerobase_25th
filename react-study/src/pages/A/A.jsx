import useGetPathname from "utils/useGetPathname";

export default function A({ temperature, setTemperature }) {
  const onChageHandler = (e) => {
    setTemperature(e.target.value, temperature);
  };

  //

  const pathname = useGetPathname();
  console.log(pathname, 1);

  return (
    <div>
      <p>A</p>
      <input type="text" placeholder={0} onChange={onChageHandler} value={temperature} />
    </div>
  );
}
