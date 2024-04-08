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
