/* running sum
주어진 배열 nums의 누계 합(running sum)을 runningSum[i] = sum(nums[0]...nums[i])으로 정의합니다.
nums의 누계 합을 반환
*/

const runningSum = (nums) => {
  // 1항은 무조건 자기 자신
  const result = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    let sum = 0;

    for (let j = 0; j <= i; j++) {
      sum += nums[j];
    }

    result.push(sum);
  }

  return result;
};

console.log(runningSum([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]

const runningSum2 = (nums) => {
  let result = 0;
  return nums.map((item) => (result += item));
};

console.log(runningSum2([1, 1, 1, 1, 1])); // [1, 2, 3, 4, 5]
console.log(runningSum2([1, 2, 3, 4])); // [1, 3, 6, 10]
console.log(runningSum2([3, 1, 2, 10, 1])); // [3, 4, 6, 16, 17]

/* == 라이브 도중 추가 == */
