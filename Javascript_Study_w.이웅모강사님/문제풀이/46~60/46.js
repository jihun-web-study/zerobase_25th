/* n 번째 원소부터
정수 리스트 nums와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return
*/

const solution = (nums, n) => {
  // do something
  return nums.slice(n - 1);
};

console.log(solution([2, 1, 6], 3)); // [6]
console.log(solution([5, 2, 1, 7, 5], 2)); // [2, 1, 7, 5]

/* == 라이브 도중 추가 == */
