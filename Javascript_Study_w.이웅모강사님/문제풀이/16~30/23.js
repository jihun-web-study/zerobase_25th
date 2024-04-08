/* 1부터 n까지의 합
양수 n이 주어지면 1부터 n까지 자연수의 합을 반환
*/

const sum = (n) => {
  let result = 0;

  for (let index = 1; index <= n; index++) {
    result += index;
  }

  return result;
};

console.log(sum(10)); // 55
console.log(sum(2)); // 3
console.log(sum(1)); // 1
