/* 구구단을 출력하는 함수를 구현
2 ~ 9단
*/

const ENDPOINT = 10;

const printMultiplicationTable1 = () => {
  // 전형적인 2중 for 문

  for (let i = 2; i < ENDPOINT; i++) {
    console.log(`=== ${i}단 ===`);

    for (let j = 1; j < ENDPOINT; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
};

const printMultiplicationTable2 = () => {
  // for-of + for-of
  const dan = [2, 3, 4, 5, 6, 7, 8, 9];
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (const danNum of dan) {
    console.log(`=== ${danNum}단 ===`);
    for (const num of count) {
      console.log(`${danNum} * ${num} = ${danNum * num}`);
    }
  }
};

const printMultiplicationTable3 = () => {
  // 배열 메서드 forEach + for 문
  const dan = [2, 3, 4, 5, 6, 7, 8, 9];
  dan.forEach((danNum) => {
    console.log(`=== ${danNum}단 ===`);
    for (let j = 2; j < ENDPOINT; j++) {
      console.log(`${danNum} * ${j} = ${danNum * j}`);
    }
  });
};

//printMultiplicationTable1();
printMultiplicationTable2();
//printMultiplicationTable3();
