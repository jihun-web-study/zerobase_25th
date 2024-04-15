/* 원소들의 곱과 합
수가 담긴 리스트 nums가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return
*/

const solution = (nums) => {
  const mul = nums.reduce((mul, num) => mul * num, 1);
  const powSum = nums.reduce((sum, num) => sum + num, 0) ** 2;

  return +(powSum > mul);
};

console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0

/* == 라이브 도중 추가 == */
// 위 코드는 O(2n)이며 O(n)으로 줄이는 코드는 아래

// 1교시 강의 보기
const solution2 = (nums) => {
  const [sum, mul] = nums.reduce(
    ([sum, mul], num) => [sum + num, mul * num],
    [0, 1]
  );

  const powSum = sum ** 2;

  return +(powSum > mul);
};

console.log(solution2([3, 4, 5, 2, 1])); // 1
console.log(solution2([5, 7, 8, 3])); // 0
