/* 2의 영역
정수 배열 nums가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return
2가 없는 경우 [-1]을 return
*/

const solution = (nums) => {
  const fisrtTwo = nums.findIndex((num) => num % 2 === 0);

  if (fisrtTwo === -1) return [-1];

  const lastTwo = nums.findLastIndex((num) => num % 2 === 0);

  return nums.slice(fisrtTwo, lastTwo + 1);
};

console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])); // [2]
console.log(solution([1, 1, 1])); // [-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); // [2, 1, 2, 1, 10, 2]

/* == 라이브 도중 추가 == */
