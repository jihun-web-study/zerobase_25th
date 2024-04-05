/* Star pattern 4
*****
_****
__***
___**
____*
*/

const star4_1 = (n) => {
  // for 문 사용
  for (let index = n; index > 0; index--) {
    console.log(`${" ".repeat(n - index)}${"*".repeat(index)}`);
  }
};

const star4_2 = (n) => {
  // while 문 사용
  let count = n;

  while (count > 0) {
    console.log(`${" ".repeat(n - count)}${"*".repeat(count)}`);
    count -= 1;
  }
};

star4_1(5);
star4_2(5);
