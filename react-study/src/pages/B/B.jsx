export default function B({ temperature, setTemperature }) {
  const onChageHandler = (e) => {
    setTemperature(e.target.value, temperature);
  };

  return (
    <div>
      <p>B</p>
      <input
        type="text"
        placeholder={0}
        onChange={onChageHandler}
        value={`'B' : ${temperature} `}
      />
    </div>
  );
}
