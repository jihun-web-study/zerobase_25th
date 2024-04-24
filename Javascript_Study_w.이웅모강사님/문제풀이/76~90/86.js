/* 약수 구하기
정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return
1 ≤ n ≤ 10,000
*/

// 무식한 방법
const findDivisors = (n) => {
  if (n === 1) return [n];

  return Array(n)
    .fill(1)
    .map((v, index) => v + index)
    .filter((v) => n % v === 0);
};

console.log(findDivisors(1)); // [1]
console.log(findDivisors(15)); // [1, 3, 5, 15]
console.log(findDivisors(16)); // [1, 2, 4, 8, 16]
console.log(findDivisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(findDivisors(29)); // [1, 29]

console.log("========");

// 위랑 비슷하지만 단순 loop를 절반으로 줄이기
const findDivisors2 = (n) => {
  if (n === 1) return [n];

  const sqrtOfN = Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : Math.floor(Math.sqrt(n));

  const divisors = [1];

  // 1은 무조건 약수이니 2와 sqrt(n)사이에서 필터링
  for (let idx = 2; idx <= sqrtOfN; idx++) {
    if (n % idx === 0) divisors.push(idx);
  }
  // 함수형 작성 코드, 속도는 위에가 더 빠르게 찍힘
  // const divisors_2 = Array.from({ length: sqrtOfN }, (_, i) => i + 1).filter((num) => n % num === 0);

  const symmetryDivisors = [];

  for (const divisor of divisors) {
    const symmetryDivisor = n / divisor;
    if (symmetryDivisor !== divisor) symmetryDivisors.push(symmetryDivisor);
  }

  const result = divisors.concat(symmetryDivisors.toReversed());

  return result;
};

console.log(findDivisors2(1)); // [1]
console.log(findDivisors2(15)); // [1, 3, 5, 15]
console.log(findDivisors2(16)); // [1, 2, 4, 8, 16]
console.log(findDivisors2(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(findDivisors2(29)); // [1, 29]

/* == 라이브 도중 추가 == */
