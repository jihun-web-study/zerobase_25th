/* Star pattern 3
____*
___**
__***
_****
*****
 */

const star3_1 = (n) => {
  // for 문 사용
  for (let index = 1; index <= n; index++) {
    console.log(`${" ".repeat(n - index)}${"*".repeat(index)}`);
  }
};

const star3_2 = (n) => {
  // while 문 사용
  let count = 1;

  while (count <= n) {
    console.log(`${" ".repeat(n - count)}${"*".repeat(count)}`);
    count += 1;
  }
};

star3_1(5);
star3_2(5);

/* == 라이브 도중 추가 == */
// padStart 또는 padEnd 사용하는 방법도 있음

let arr = ["a", "b", "c", "d"];

for (const value of arr) {
  if (value === "c") break;
  console.log(arr[value]);
}
