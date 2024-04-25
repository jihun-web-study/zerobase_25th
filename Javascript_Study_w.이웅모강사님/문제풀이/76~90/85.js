/* sum of digits
양의 정수(1 ≤ n ≤ 100)를 전달받아 각 자릿수의 합을 반환
숫자를 문자열로 변환하는 방법은 사용하지 않는다.
*/

const sumOfDigits = (n) => {
  const diviederByTen = Math.trunc(Math.log10(n));

  if (diviederByTen === 0) return n;

  let currentNum = n;
  let answer = 0;

  for (let idx = diviederByTen; idx >= 0; idx--) {
    const divider = 10 ** idx;
    const digit = Math.trunc(currentNum / divider);
    answer += digit;
    currentNum %= divider;
  }

  return answer;
};

console.log(sumOfDigits(1) === 1); // 1
console.log(sumOfDigits(123) === 6); // 6
console.log(sumOfDigits(1010) === 2); // 2
console.log(sumOfDigits(54321) === 15); // 15

/* == 라이브 도중 추가 == */

const sumOfDigits2 = (n) => {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.trunc(n / 10);
  }

  return sum;
};

console.log(sumOfDigits2(1) === 1); // 1
console.log(sumOfDigits2(123) === 6); // 6
console.log(sumOfDigits2(1010) === 2); // 2
console.log(sumOfDigits2(54321) === 15); // 15
