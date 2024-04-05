/* Star pattern 7
 *****
 *****
 *****
 *****
 *****
 */

const star7_1 = (n) => {
  // for 문 사용
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
