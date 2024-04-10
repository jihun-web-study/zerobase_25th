/* 정수 찾기
정수 리스트 nums와 찾으려는 정수 n이 주어질 때, nums안에 n이 있으면 1을 없으면 0을 return
*/

const solution = (nums, n) => {
  return +nums.includes(n);
};

console.log(solution([1, 2, 3, 4, 5], 3)); // 1
console.log(solution([15, 98, 23, 2, 15], 20)); // 0

/* == 라이브 도중 추가 == */
