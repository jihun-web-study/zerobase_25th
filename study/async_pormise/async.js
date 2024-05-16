import loadPhoto from "./utils/functions.js";

const URL = "https://api.heropy.dev/v0/users";
const defaultPhoto =
  "https://w7.pngwing.com/pngs/673/363/png-transparent-playbuzz-business-advertising-quiz-logo-favicon-purple-violet-text-thumbnail.png";

console.log("init");

const createLoader = (element) => {
  const loader = document.createElement("div");
  loader.classList.add("loader");
  element.append(loader);

  return loader;
};

const fetchButton = document.querySelector(".fetch--btn");

fetchButton.addEventListener("click", async () => {
  const ulEl = document.querySelector(".users");
  ulEl.innerHTML = "";
  const ulLoader = createLoader(ulEl);

  try {
    const { users } = await (await fetch(URL)).json();

    const userEl = users.map((user) => {
      const liEl = document.createElement("li");
      const userLoader = createLoader(liEl);

      liEl.textContent = user.name;
      liEl.dataset.photo = user.photo?.url || defaultPhoto + "1";
      if (!user.photo) liEl.classList.add("no-photo");
      liEl.prepend(userLoader);

      return liEl;
    });
    ulLoader.remove();

    ulEl.append(...userEl);

    userEl.forEach(async (liEl) => {
      try {
        const imgEl = await loadPhoto(liEl.dataset.photo);
        liEl.prepend(imgEl);
        delete liEl.dataset.photo;
      } catch (error) {
        console.log("error");
      } finally {
        liEl.querySelector(".loader").remove();
      }
    });
  } catch (error) {
    ulLoader.remove();
    ulEl.textContent = "Fetch Failed...";
  }
});
