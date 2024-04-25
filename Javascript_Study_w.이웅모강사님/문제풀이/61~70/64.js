/* x 사이의 개수
str을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return
*/

const solution = (str) => {
  const splitWord = 'x';

  return str.split(splitWord).map((v) => v.length);
};

console.log(solution('oxooxoxxox')); // [1, 2, 1, 0, 1, 0]
console.log(solution('xabcxdefxghi')); // [0, 3, 3, 3]

/* == 라이브 도중 추가 == */
