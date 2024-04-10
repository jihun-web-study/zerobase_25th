/* n개 간격의 원소들
정수 리스트 nums와 정수 n이 주어질 때, nums의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return
*/

const solution = (nums, n) => {
  // do something
  return nums.filter((v, i) => i % n === 0);
};

console.log(solution([4, 2, 6, 1, 7, 6], 2)); // [4, 6, 7]
console.log(solution([4, 2, 6, 1, 7, 6], 4)); // [4, 7]

/* == 라이브 도중 추가 == */
