/* 문자열 정렬하기 (1)
str 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return
*/

const solution = (str) => {
  const arr = str.split('');
  const reg = /^\d+$/;
  const res = arr.filter((v) => reg.test(v));

  return res.map((v) => Number(v));
};

console.log(solution('hi12392')); // [1, 2, 2, 3, 9]
console.log(solution('p2o4i8gj2')); // [2, 2, 4, 8]
console.log(solution('abcde0')); // [0]

/* == 라이브 도중 추가 == */
