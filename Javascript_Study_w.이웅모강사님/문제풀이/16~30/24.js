/* n부터 m까지의 합
양수 n, m이 주어지면 n부터 m까지 자연수의 합을 반환
*/

const sum = (n, m) => {
  let result = 0;

  for (let index = n; index <= m; index++) {
    result += index;
  }

  return result;
};

console.log(sum(3, 8)); // 33
console.log(sum(3, 3)); // 3
console.log(sum(3, 2)); // 0
