const h1El = document.querySelector("h1");
const h2El = document.querySelector("h2");

const toggleColor = () => {
  let isRed = false;
  return (event) => {
    const el = event.target;
    isRed = !isRed;
    el.style.color = isRed ? "red" : "black";
  };
};

h1El.addEventListener("click", toggleColor());
h2El.addEventListener("click", toggleColor());
