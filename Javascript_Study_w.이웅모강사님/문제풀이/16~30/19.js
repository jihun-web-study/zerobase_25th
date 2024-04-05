/* Star pattern 6
*********
_*******
__*****
___***
____* 
*/

const star6_1 = (n) => {
  // for 문 사용
  for (let index = n; index > 0; index--) {
    console.log(`${" ".repeat(n - index)}${"*".repeat(2 * index - 1)}`);
  }
};

const star6_2 = (n) => {
  // while 문 사용
  let starCount = n;

  while (starCount > 0) {
    console.log(`${" ".repeat(n - starCount)}${"*".repeat(2 * starCount - 1)}`);
    starCount -= 1;
  }
};

star6_1(5);
star6_2(5);
