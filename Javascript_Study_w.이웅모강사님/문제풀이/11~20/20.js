/* Star pattern 7
 *****
 *****
 *****
 *****
 *****
 */

const star7_1 = (n) => {
  // for 문 사용

  // O(n^2)
  for (let index = 0; index < n; index++) {
    console.log(`${"*".repeat(n)}`);
  }
};

const star7_2 = (n) => {
  // while 문 사용
  let count = n;
  while (count--) {
    console.log(`${"*".repeat(n)}`);
  }
};

const star7_3 = (n) => {
  Array.from({ length: n }, () => {
    console.log(`${"*".repeat(n)}`);
  });
};

star7_1(5);
console.log("========");
star7_2(5);
console.log("========");
star7_3(5);

/* == 라이브 도중 추가 == */
const star7_4 = (n) => {
  // O(n^2)인 star7_1의 개선 버전
  // 이 코드는 O(n + n) = O(n)
  const star = "*".repeat(n);

  for (let index = 0; index < n; index++) {
    console.log(star);
  }
};
