/* 순서 바꾸기
정수 리스트 nums와 정수 n이 주어질 때, 
nums를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return
*/

const solution = (nums, n) => {
  const copy = JSON.parse(JSON.stringify(nums)); // 깊은복사

  const front = copy.splice(0, n);

  return copy.concat(front);
};

console.log(solution([2, 1, 6], 1)); // [1, 6, 2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [7, 5, 5, 2, 1]

/* == 라이브 도중 추가 == */
const solution2 = (nums, n) => {
  const front = nums.slice(0, n);
  const back = nums.slice(n);

  return [...back, ...front];
};

console.log(solution2([2, 1, 6], 1)); // [1, 6, 2]
console.log(solution2([5, 2, 1, 7, 5], 3)); // [7, 5, 5, 2, 1]
