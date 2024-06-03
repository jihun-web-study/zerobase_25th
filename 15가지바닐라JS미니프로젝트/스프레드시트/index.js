const table = document.querySelector("table");

table.addEventListener("click", (event) => {
  // 클릭된 요소 찾기
  const clickedElement = event.target;

  // 클릭된 요소가 td 태그인지 확인
  if (clickedElement.tagName === "TD") {
    // td 태그의 위치 찾기
    const tr = clickedElement.parentNode;
    const tdIndex = Array.from(tr.children).indexOf(clickedElement);
    const trIndex = Array.from(tr.parentNode.children).indexOf(tr);

    const innerText = clickedElement.innerText;

    const rowMap = {
      1: 1,
      2: 2,
      3: 3,
    };

    const columnMap = {
      1: "A",
      2: "B",
      3: "C",
      4: "D",
    };

    console.log(`This is ${columnMap[tdIndex]}${rowMap[trIndex]} Cell.`);
  }
});
