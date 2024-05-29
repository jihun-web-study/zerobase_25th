const descTabs = document.querySelector(".section--description-tabs");

descTabs.addEventListener("click", (event) => {
  const target = event.target;
  const descTabClassName = "section--description-tab";
  console.log(typeof target.classList, target.classList);
  const isTab = [...target.classList].includes(descTabClassName);
  console.log(isTab);

  if (isTab) {
    const descText = document.querySelector(".section--description-text>.text-type");
    const descTabType = [...target.classList][1];
    descText.textContent = descTabType;
  }
});

const form = document.querySelector(".form");
const formInput = document.querySelector(".form-input");

form.addEventListener("submit", (e) => {
  const formEl = e.target;
  const inputEl = formEl.querySelector("input");

  e.preventDefault();
  console.log(inputEl.value);
});
