/* flat
중첩된 정수 배열 arr이 주어지면 평탄화한 배열을 반환하는 함수
Array#flat, Array#flatMap은 사용하지 않는다.
*/

// gpt 참고
// 처음 실행했을때의 result와 재귀로 돌리는 result는 다른 변수임
const flat = (arr) => {
  const result = [];

  for (const element of arr) {
    if (Array.isArray(element)) {
      result.push(...flat(element));
    } else {
      result.push(element);
    }
  }
  return result;
};

console.log(flat([1, 2, 3, [4, 5, [6, 7], 8], 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flat([1, 2, 3])); // [1, 2, 3]
console.log(flat([])); // []

/* == 라이브 도중 추가 == */

const flat2 = (arr) =>
  arr.reduce((flatten, v) => [...flatten, ...(Array.isArray(v) ? flat2(v) : [v])], []);

console.log(flat2([1, 2, 3, [4, 5, [6, 7], 8], 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flat2([1, 2, 3])); // [1, 2, 3]
console.log(flat2([])); // []
