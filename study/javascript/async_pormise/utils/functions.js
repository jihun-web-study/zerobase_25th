export default function loadPhoto(src) {
  return new Promise((resolve, reject) => {
    const imgEl = document.createElement("img");
    imgEl.src = src;
    imgEl.addEventListener("load", () => {
      resolve(imgEl);
    });
    imgEl.addEventListener("error", () => {
      reject(new Error());
    });
  });
}
