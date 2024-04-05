/* Star pattern 2
 *****
 ****
 ***
 **
 *
 */

/* 별찍기 1과 반대 */

const star2_1 = (n) => {
  // for 문 사용
  for (let index = n; index > 0; index--) {
    console.log("*".repeat(index));
  }
};

const star2_2 = (n) => {
  // while 문 사용
  let count = n;

  while (count > 0) {
    /* if (count > n) break; */
    console.log("*".repeat(count));
    count -= 1;
  }
};

star2_1(5);
star2_2(5);
