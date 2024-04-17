/* 이어 붙인 수
정수가 담긴 리스트 nums가 주어집니다. 
nums의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return
*/

const solution = (nums) => {
  const { sumOdd, sumEven } = nums.reduce(
    (result, num) => {
      if (num % 2 === 0) result.sumEven += String(num);
      else result.sumOdd += String(num);
      return result;
    },
    { sumOdd: '', sumEven: '' }
  );

  return Number(sumOdd) + Number(sumEven);
};

console.log(solution([3, 4, 5, 2, 1])); // 393
console.log(solution([5, 7, 8, 3])); // 581

/* == 라이브 도중 추가 == */
