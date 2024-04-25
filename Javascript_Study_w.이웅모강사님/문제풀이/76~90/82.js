/* 9로 나눈 나머지
음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return
*/

const solution = (num) => {
  if (Number.isSafeInteger(num)) return num % 9;

  const arr = [...num];
  const sum = arr.reduce((sum, numStr) => sum + Number(numStr), 0);

  return sum % 9;
};

console.log(solution("123")); // 6
console.log(solution("78720646226947352489")); // 2

const solution1 = (num) => {
  if (Number.isSafeInteger(num)) return num % 9;

  const length = num.length;
  const slice = [
    Number(num.slice(0, length / 3)),
    Number(num.slice(length / 3, (2 * length) / 3)),
    Number(num.slice((2 * length) / 3)),
  ];

  return (slice[0] + slice[1] + slice[2]) % 9;
};

console.log(solution1("123")); // 6
console.log(solution1("78720646226947352489")); // 2

/* == 라이브 도중 추가 == */

// Number.isSafeInteger() === true 인 정수값: 2 ^ 53 -1
// 큰 수 뒤에 n을 붙이면 Number가 아니라 BigInt가 된다

const solution2 = (num) => {
  if (Number.isSafeInteger(num)) return num % 9;

  return Number(BigInt(num) % 9n);
};

console.log(solution2("123")); // 6
console.log(solution2("78720646226947352489")); // 2
