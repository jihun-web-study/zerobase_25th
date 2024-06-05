const scoreBoard = document.querySelector(".score_board");
const playerScore = document.querySelector(".score_player");
const comScore = document.querySelector(".score_com");
const buttons = document.querySelector(".buttons");

const comSelect = () => {
  const selects = ["가위", "바위", "보"];
  const randIndex = Math.floor(Math.random() * 3);
  const randSelect = selects[randIndex];

  return randSelect;
};

const whoIsWinner = (player, com) => {
  if (player === com) return "무승부";
  else {
    switch (player) {
      case "가위":
        return com === "바위" ? "패배" : "승리";
      case "바위":
        return com === "보" ? "패배" : "승리";
      case "보":
        return com === "가위" ? "패배" : "승리";
      default:
        return undefined;
    }
  }
};

buttons.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName === "BUTTON") {
    const playerSelect = target.innerText;

    const selects = ["가위", "바위", "보"];
    const randIndex = Math.floor(Math.random() * 3);
    const comSelect = selects[randIndex];

    const prevPlayerScore = +playerScore.innerText;
    const prevComScore = +comScore.innerText;

    const result = whoIsWinner(playerSelect, comSelect);

    if (result === "승리") {
      playerScore.innerText = prevPlayerScore + 1;
    } else if (result === "패배") {
      comScore.innerText = prevComScore + 1;
    } else {
      console.log("무승부");
    }
  }
});
