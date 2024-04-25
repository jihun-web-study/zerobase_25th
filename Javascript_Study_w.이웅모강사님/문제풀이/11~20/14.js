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

/* == 라이브 도중 추가 == */
console.log("==== 성능 측정 ====");
// 1번 : O(n)
let star = "*";
console.time();
for (let index = 0; index < 100000; index++) {
  star += "*";
  const a = star;
}
console.timeEnd();

// 2번 : O(n^2)
console.time();
for (let index = 0; index < 100000; index++) {
  const a = `${"*".repeat(index)}`;
}
console.timeEnd();

// 결국 repeat도 반복문을 돌기 때문에 반복 횟수가 점점 많아질수록
// 코드는 덜 깔끔한 1번이 더 빠르게 연산한다.
