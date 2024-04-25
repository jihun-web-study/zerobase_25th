/* 짝수 홀수 개수
정수가 담긴 리스트 nums가 주어질 때, nums의 원소 중 짝수와 홀수의 개수를 담은 배열을 return
*/

const solution = (nums) => {
  return nums.reduce(
    (result, value) => {
      if (value % 2 === 0) {
        result[0] += 1;
        return result;
      }
      result[1] += 1;
      return result;
    },
    [0, 0]
  );
};

console.log(solution([1, 2, 3, 4, 5])); // [2, 3]
console.log(solution([1, 3, 5, 7])); // [0, 4]
