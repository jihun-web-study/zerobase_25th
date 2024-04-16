/* 최댓값과 최솟값
문자열 str에는 공백으로 구분된 숫자들이 저장
str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환
*/

const solution = (str) => {
  const arr = str
    .split(' ')
    .map((v) => Number(v))
    .sort((a, b) => a - b);

  return `${arr.at(0)} ${arr.at(-1)}`;
};

console.log(solution('1 2 3 4')); // '1 4'
console.log(solution('-1 -2 -3 -4')); // '-4 -1'
console.log(solution('-1 -1')); // '-1 -1'

/* == 라이브 도중 추가 == */
