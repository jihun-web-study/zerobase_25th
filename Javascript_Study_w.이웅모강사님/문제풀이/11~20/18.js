/* Star pattern 5
____*
___***
__*****
_*******
*********
*/

/* '*' : 2i-1 개 ' ' : n-index 개 */

const star5_1 = (n) => {
  // for 문 사용
  for (let index = 1; index <= n; index++) {
    console.log(`${" ".repeat(n - index)}${"*".repeat(2 * index - 1)}`);
  }
};

const star5_2 = (n) => {
  // while 문 사용
  let starCount = 1;

  while (starCount <= n) {
    console.log(`${" ".repeat(n - starCount)}${"*".repeat(2 * starCount - 1)}`);
    starCount += 1;
  }
};

star5_1(5);
star5_2(5);
