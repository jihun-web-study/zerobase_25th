/* deepReverse
주어진 중첩된 배열 arr을 뒤집은 새로운 배열을 반환하는 함수를 구현
- arr은 반드시 배열이다.
- for 문, for…in 문, for…of 문, Array#forEach는 사용하지 않는다.
*/

// typeof null != null
// 참고: https://poiemaweb.com/js-type-check

// gpt 참고
const deepReverse = (arr) => {
  // 배열이 아니거나 비어있는 경우 원래 값 반환
  if (!Array.isArray(arr) || arr.length === 0) {
    return arr;
  }

  // 배열의 각 요소를 재귀적으로 뒤집은 후 새로운 배열에 담아 반환
  return arr.map((item) => deepReverse(item)).reverse();
};

console.log(deepReverse([1])); // [1]
console.log(deepReverse([1, 2])); // [2, 1]
console.log(deepReverse([1, 2, 3])); // [3, 2, 1]
console.log(deepReverse([1, [2, [3, [4, 5]]]])); // [[[[5, 4], 3], 2], 1]
console.log(deepReverse(1)); // 1
console.log(deepReverse(null)); // null
console.log(deepReverse()); // undefined

console.log("=====");
// 위 함수 단축
//const deepReverse1 = (arr) =>
//  !Array.isArray(arr) || arr.length === 0 ? arr : arr.map((item) => deepReverse1(item)).reverse();

const deepReverse1 = (arr) => arr?.map?.((item) => deepReverse1(item)).reverse() ?? arr;

console.log(deepReverse1([1])); // [1]
console.log(deepReverse1([1, 2])); // [2, 1]
console.log(deepReverse1([1, 2, 3])); // [3, 2, 1]
console.log(deepReverse1([1, [2, [3, [4, 5]]]])); // [[[[5, 4], 3], 2], 1]
console.log(deepReverse1(1)); // 1
console.log(deepReverse1(null)); // null
console.log(deepReverse1()); // undefined

/* == 라이브 도중 추가 == */
console.log("=====");
const deepReverse2 = (arr) => {
  // 배열이 아니거나 비어있는 경우 원래 값 반환
  if (!Array.isArray(arr) || arr.length === 0) {
    return arr;
  }

  const res = [];

  for (const v of arr) {
    if (Array.isArray(v)) res.push(deepReverse2(v));
    else res.push(v);
  }

  return res.reverse();
};

console.log(deepReverse2([1, [2, [3, [4, 5]]]])); // [[[[5, 4], 3], 2], 1]
