/* Star pattern 3
____*
___**
__***
_****
*****
 */

const star3_1 = (n) => {
  // for 문 사용
  for (let index = 1; index < n + 1; index++) {
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
