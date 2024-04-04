/* Star pattern 1
 *
 **
 ***
 ****
 *****
 */

const star1_1 = (n) => {
  // for 문 사용
  for (let index = 1; index < n + 1; index++) {
    console.log("*".repeat(index));
  }
};

const star1_2 = (n) => {
  // while 문 사용
  let count = 1;

  while (count <= n) {
    /* if (count > n) break; */
    console.log("*".repeat(count));
    count += 1;
  }
};

star1_1(5);
star1_2(5);
