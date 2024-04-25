/* 2의 영역
정수 배열 nums가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return
2가 없는 경우 [-1]을 return
*/

const solution = (nums) => {
  const firstTwo = nums.findIndex((num) => num % 2 === 0);

  if (firstTwo === -1) return [-1];

  const lastTwo = nums.findLastIndex((num) => num % 2 === 0);

  return nums.slice(firstTwo, lastTwo + 1);
};

console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])); // [2]
console.log(solution([1, 1, 1])); // [-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); // [2, 1, 2, 1, 10, 2]

/* == 라이브 도중 추가 == */
// 이 경우는 고정 값이니깐 indexOf와 lastIndexOf를 사용
const solution2 = (nums) => {
  const firstIndex = nums.indexOf(2);

  if (firstIndex === -1) return [-1];

  const lastIndex = nums.lastIndexOf(2);

  return nums.slice(firstIndex, lastIndex + 1);
};

console.log(solution2([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution2([1, 2, 1])); // [2]
console.log(solution2([1, 1, 1])); // [-1]
console.log(solution2([1, 2, 1, 2, 1, 10, 2, 1])); // [2, 1, 2, 1, 10, 2]
