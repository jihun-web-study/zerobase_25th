/* 3Sum
정수 배열 nums가 주어지면 `i != j`, `i != k`, `j != k`, 
`nums[i] + nums[j] + nums[k] == 0`이 성립하는 모든 삼중항 `[nums[i]`, `nums[j]`, `nums[k]]`을 반환한다.
반환하는 삼중항에 중복된 요소가 포함되어서는 안된다.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 직접 풀이 실패
const threeSum = (nums) => {
  const sumTarget = 0;
  const end = nums.length;

  let answer = [];

  for (let i = 0; i < end - 2; i++) {
    for (let j = i + 1; j < end - 1; j++) {
      for (let k = j + 1; k < end; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === sumTarget) answer.push([nums[i], nums[j], nums[k]]);
      }
    }
  }

  return answer;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]

/* == 라이브 도중 추가 == */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// two-pointers 알고리즘
// 위의 O(n^3)가 O(n^2)로 줄여들음
// *해답 보고 스스로 해석해 볼 것*
const threeSum2 = (nums) => {
  const res = [];

  nums.sort((a, b) => a - b); // O(nlogn)

  for (let i = 0; i < nums.length; i++) {
    /**
     * 반환하는 삼중항에 중복된 요소가 포함되어서는 안된다.
     * 따라서 중복을 피하기 위해 이미 처리한 요소와 같은 요소가 다음에 이어진다면 건너뛴다.
     */
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let [low, high] = [i + 1, nums.length - 1];

    // 최악의 경우 O(n)
    while (low < high) {
      const sum = nums[i] + nums[low] + nums[high];

      if (sum < 0) {
        low += 1;
      } else if (sum > 0) {
        high -= 1;
      } else {
        res.push([nums[i], nums[low], nums[high]]);

        /**
         * 반환하는 삼중항에 중복된 요소가 포함되어서는 안된다.
         * 따라서 중복을 피하기 위해 이미 처리한 요소와 같은 요소가 다음에 이어진다면 건너뛴다.
         * 아래 반복은 최악의 경우 O(n)이지만 sum이 0인 경우 이미 처리한 요소와 같은 요소가 다음에 이어질 때만 실행된다.
         * 따라서 복잡도에 큰 영향을 미치지 않으므로 복잡도 계산에서 제외한다.
         */
        while (nums[low] === nums[low + 1]) low += 1;
        while (nums[high] === nums[high - 1]) high -= 1;

        [low, high] = [low + 1, high - 1];
      }
    }
  }

  return res;
};

console.log(threeSum2([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum2([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]
console.log(threeSum2([0, 1, 1])); // []
console.log(threeSum2([0, 0, 0])); // [[0, 0, 0]]
