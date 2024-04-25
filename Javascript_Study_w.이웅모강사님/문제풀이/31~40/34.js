/* 뒤에서 5등 위로
정수로 이루어진 리스트 nums가 주어집니다. nums에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return
*/

const solution = (nums) => {
  const copyArr = JSON.parse(JSON.stringify(nums));

  return copyArr.sort((a, b) => a - b).slice(5);
};

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));
// [15, 32, 38, 46, 56]

/* == 라이브 도중 추가 == */

const solution2 = (nums) => {
  return nums.toSorted((a, b) => a - b).slice(5);
};

console.log(solution2([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));
