export default function C() {
  return (
    <div>
      <p>C</p>
      <form action="/" method="get">
        <input type="number" placeholder={0} inputMode="numeric" pattern="[0-9]*" />
      </form>
    </div>
  );
}
