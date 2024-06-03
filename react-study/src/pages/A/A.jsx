export default function A({ temperature, setTemperature }) {
  const onChageHandler = (e) => {
    setTemperature(e.target.value, temperature);
  };

  return (
    <div>
      <p>A</p>
      <input type="text" placeholder={0} onChange={onChageHandler} value={temperature} />
    </div>
  );
}
