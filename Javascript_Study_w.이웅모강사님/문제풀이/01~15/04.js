/* 홀짝
정수 n이 주어질 때  n이 짝수이면 true, 홀수이면 false를 반환
*/

/* 공통: 음수를 2로 나누면 -1이 나옴 */

const isEven1 = (n) => {
  if (typeof n !== "number") {
    throw new Error("숫자만 입력하시오");
  }

  // if 문으로 분기
  if (n % 2 === 1 || n % 2 === -1) return false;
  else return true;

  /* 심플한 버번
   if (n % 2 === 0) return true;
  else return false;
  */
};

const isEven2 = (n) => {
  if (typeof n !== "number") return NaN;

  // 단축형
  return !(n % 2 === 1 || n % 2 === -1);
};

const isEven3 = (n) => {
  if (typeof n !== "number") return NaN;

  // switch 문으로 분기
  const condition = n % 2;

  switch (condition) {
    case 0:
      return true;
    case 1:
      return false;
    case -1:
      return false;
  }
};

const isEven4 = (n) => {
  if (typeof n !== "number") return NaN;

  // 삼항연산자
  return n % 2 === 0 ? true : false;
};

const isEven5 = (n) => {
  if (typeof n !== "number") return NaN;

  // 객체 사용
  const result = {
    0: true,
    1: false,
    "-1": false,
  };

  const condition = n % 2;

  return result[condition];
};

console.log("===solution1===");
console.log(isEven1(0)); // true
console.log(isEven1(1)); // false
console.log(isEven1(2)); // true
console.log(isEven1(101)); // false
console.log(isEven1(-2)); // true
console.log(isEven1("s")); // true

console.log("===solution2===");
console.log(isEven2(0)); // true
console.log(isEven2(1)); // false
console.log(isEven2(2)); // true
console.log(isEven2(101)); // false
console.log(isEven2(-2)); // true

console.log("===solution3===");
console.log(isEven3(0)); // true
console.log(isEven3(1)); // false
console.log(isEven3(2)); // true
console.log(isEven3(101)); // false
console.log(isEven3(-2)); // true

console.log("===solution4===");
console.log(isEven4(0)); // true
console.log(isEven4(1)); // false
console.log(isEven4(2)); // true
console.log(isEven4(101)); // false
console.log(isEven4(-2)); // true
console.log(isEven4("s")); // true
