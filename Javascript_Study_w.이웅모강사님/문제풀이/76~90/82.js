/* 9로 나눈 나머지
음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return
*/

const solution = (num) => {
  const arr = [...num];
  const sum = arr.reduce((sum, numStr) => sum + Number(numStr), 0);

  return sum % 9;
};

console.log(solution('123')); // 6
console.log(solution('78720646226947352489')); // 2

/* == 라이브 도중 추가 == */
