/* 최빈값 구하기
최빈값은 주어진 값 중에서 가장 자주 나오는 값
정수 배열 nums가 매개변수로 주어질 때, 최빈값을 return
최빈값이 여러 개면 -1을 return 
*/

const solution = (nums) => {
  if (nums.length === 1) return nums[0];

  const counter = new Map();

  nums.forEach((element) => {
    counter.set(element, (counter.get(element) || 0) + 1);
  });

  const max = Math.max(...counter.values());
  const mode = Array.from(counter).filter(([num, count]) => count === max);

  return mode.length === 1 ? mode[0][0] : -1;
};

console.log(solution([1, 2, 3, 3, 3, 4])); // 3
console.log(solution([1, 1, 2, 2])); // -1
console.log(solution([1])); // 1

/* == 라이브 도중 추가 == */
