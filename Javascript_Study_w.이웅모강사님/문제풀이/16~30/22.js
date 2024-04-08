/* 카운트 업
정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return
*/

const solution = (start, end) => {
  // do something
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};

console.log(solution(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]
