/* 최댓값과 최솟값
문자열 str에는 공백으로 구분된 숫자들이 저장
str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환
*/

// 이 방법은 sort로 인해 O(nlogn)이 되어 별로이다.
const solution = (str) => {
  const arr = str
    .split(" ")
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  return `${arr.at(0)} ${arr.at(-1)}`;
};

console.log(solution("1 2 3 4")); // '1 4'
console.log(solution("-1 -2 -3 -4")); // '-4 -1'
console.log(solution("-1 -1")); // '-1 -1'

/* == 라이브 도중 추가 == */

const solution2 = (str) => {
  // 문제 조건에서 숫자로만 이루어진 문자열이 들어오기 때문에
  // Number() 사용 제거
  const arr = str.split(" ");

  let max = Math.max(...arr);

  let min = Math.min(...arr);

  return `${min} ${max}`;
};

console.log(solution2("1 2 3 4")); // '1 4'
console.log(solution2("-1 -2 -3 -4")); // '-4 -1'
console.log(solution2("-1 -1")); // '-1 -1'
