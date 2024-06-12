import Queue from "../queue/queue.js";

const queue = new Queue();

function answer(N) {
  const result = [];

  const cards = Array.from({ length: N }, (_, i) => N - i);

  while (cards.length !== 0) {
    result.push(cards.pop());
    if (cards.length !== 0) {
      const nextCard = cards.pop();
      cards.unshift(nextCard);
    }
  }

  return result;
}

const inputs = [4, 7, 10];

inputs.forEach((v) => console.log(`${v}: ${answer(v)}`));
