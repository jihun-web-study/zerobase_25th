/* 등차수열의 특정한 항만 더하기
두 정수 a, d와 길이가 n인 boolean 배열 included
첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미
등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return
*/

const solution = (a, d, included) => {
  //const arr = Array.from({ length: included.length }, (_, i) => i * d + a);
  const arr = Array(included.length)
    .fill(a)
    .map((n, i) => n + i * d);

  const sum = included.reduce((trueSum, bool, idx) => (bool ? trueSum + arr[idx] : trueSum), 0);

  return sum;
};

console.log(solution(3, 4, [true, false, false, true, true]) === 37); // 37
console.log(solution(7, 1, [false, false, false, true, false, false, false]) === 10); // 10

/* == 라이브 도중 추가 == */
// 굳이 배열을 하나 만들 필요가 없음
const solution2 = (a, d, included) => {
  const sum = included.reduce((trueSum, bool, idx) => (bool ? trueSum + a + d * idx : trueSum), 0);

  return sum;
};

console.log(solution2(3, 4, [true, false, false, true, true]) === 37); // 37
console.log(solution2(7, 1, [false, false, false, true, false, false, false]) === 10); // 10
