/* 3Sum
정수 배열 nums가 주어지면 `i != j`, `i != k`, `j != k`, 
`nums[i] + nums[j] + nums[k] == 0`이 성립하는 모든 삼중항 `[nums[i]`, `nums[j]`, `nums[k]]`을 반환한다.
반환하는 삼중항에 중복된 요소가 포함되어서는 안된다.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  let answer = [];

  //const end = Math.ceil(nums.length / 2);
  const end = nums.length - 2;

  for (let i = 0; i < end; i++) {
    const [j, k] = [i + 1, i + 2];
    console.log(i, j, k);
  }

  return end;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]

/* == 라이브 도중 추가 == */
