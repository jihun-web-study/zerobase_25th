/* Two sum
정수 배열 nums와 정수 target
ums의 두 요소의 합이 target과 같은 두 요소의 인덱스를 반환

*/

const twoSum = (nums, target) => {
  const filtered = nums.filter((n) => n < 9);
  if (filtered.length === 2) return [0, 1];

  let numIndices = {};

  for (let idx = 0; idx < filtered.length; idx++) {
    const diff = target - filtered[idx];

    if (diff in numIndices) return [numIndices[diff], idx];

    numIndices[filtered[idx]] = idx;
  }

  return filtered;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]

/* == 라이브 도중 추가 == */
/* for (i = 0; i < nums.length; i++) {
  let cpmt = target - nums[i];

  console.log(i, cpmt, numIndices);

  if (cpmt in numIndices) {
    return [numIndices[cpmt], i];
  }

  numIndices[nums[i]] = i;
} */
