/* 아이스 아메리카노
아이스 아메리카노는 한잔에 5,500원입니다. 
머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 
머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

0 < money ≤ 1,000,000
*/

const price = 5500;

const solution1 = (money) => {
  // parseInt와 '%' 연산자로 몫, 나머지 구하기
  return [parseInt(money / price), money % price];
};

const solution2 = (money) => {
  // solution1에서 배열 메서드 사용
  const result = [0, 0];
  result[0] = parseInt(money / price);
  result[1] = money % price;
  return result;
};

const solution3 = (money) => {
  // Math.floor() 사용
  return [Math.floor(money / price), money % price];
};

const solution4 = (money) => {
  // '-' 연산자 loop 이용하기
  let coffee = 0;
  let change = money;

  while (change >= price) {
    if (change < price) break;
    change -= price;
    coffee += 1;
  }

  return [coffee, change];
};

console.log("===solution1===");
console.log(solution1(5500)); // [1, 0]
console.log(solution1(15000)); // [2, 4000]
console.log(solution1(1000)); // [0, 1000]

console.log("===solution2===");
console.log(solution2(5500)); // [1, 0]
console.log(solution2(15000)); // [2, 4000]
console.log(solution2(1000)); // [0, 1000]

console.log("===solution3===");
console.log(solution3(5500)); // [1, 0]
console.log(solution3(15000)); // [2, 4000]
console.log(solution3(1000)); // [0, 1000]

console.log("===solution3===");
console.log(solution4(5500)); // [1, 0]
console.log(solution4(15000)); // [2, 4000]
console.log(solution4(1000)); // [0, 1000]
