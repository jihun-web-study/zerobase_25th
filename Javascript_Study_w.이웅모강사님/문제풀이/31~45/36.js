/* 배열 만들기 2
정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return
*/

const solution1 = (l, r) => {
  // 정규표현식 이용
  const regex = /^[50]+$/;
  const arr = [];

  const start = Math.ceil(l / 5) * 5;
  const end = Math.floor(r / 5) * 5;

  for (let number = start; number <= end; number += 5) {
    if (regex.test(number.toString())) {
      arr.push(number);
    }
  }

  return arr.length === 0 ? [-1] : arr;
};

const solution2 = (l, r) => {
  // 정규표현식 + 고차함수 이용
  const regex = /^[50]+$/;
  const start = Math.ceil(l / 5) * 5; // n 이상에서 가장 가까운 5의 배수
  const end = Math.floor(r / 5) * 5; // m 이하에서 가장 가까운 5의 배수

  const arr = Array.from(
    { length: (end - start) / 5 + 1 },
    (_, index) => start + index * 5
  );

  const result = arr.filter((value) => regex.test(value.toString()));

  return result.length === 0 ? [-1] : result;
};

console.log("===solution1===");
console.log(solution1(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution1(10, 20)); // [-1]

console.log("===solution2===");
console.log(solution2(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution2(10, 20)); // [-1]

/* == 라이브 도중 추가 == */
const solution3 = (l, r) => {
  // array.every() 사용하기

  const start = Math.ceil(l / 5) * 5; // n 이상에서 가장 가까운 5의 배수
  const end = Math.floor(r / 5) * 5; // m 이하에서 가장 가까운 5의 배수

  const arr = Array.from({ length: (end - start) / 5 + 1 }, (_, index) =>
    String(start + index * 5)
  );

  const result = [];

  arr.forEach((num) => {
    if ([...num].every((c) => c === "0" || c === "5")) result.push(Number(num));
  });

  return result;
};

console.log("===solution3===");
console.log(solution3(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution3(10, 20)); // [-1]

const solution4 = (l, r) => {
  // 정규표현식 + replaceAll() 사용하기

  const start = Math.ceil(l / 5) * 5; // n 이상에서 가장 가까운 5의 배수
  const end = Math.floor(r / 5) * 5; // m 이하에서 가장 가까운 5의 배수

  const arr = Array.from({ length: (end - start) / 5 + 1 }, (_, index) =>
    String(start + index * 5)
  );

  const result = [];

  arr.forEach((num) => {
    if (num.replaceAll(/[05]/g, "") === "") result.push(Number(num));
  });

  return result;
};

console.log("===solution4===");
console.log(solution4(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution4(10, 20)); // [-1]
