/* 양꼬치
머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 
정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return
*/

const PRICE_LAMBSKEWERS = 12_000;
const PRICE_DRINK = 2_000;

const solution1 = (n, k) => {
  // 조건대로 계산식 세우기
  // 음료수를 0개 먹은 경우 생각해서 예외처리 하기
  const howManyDrinks = k === 0 ? 0 : k - parseInt(n / 10);

  return n * PRICE_LAMBSKEWERS + howManyDrinks * PRICE_DRINK;
};

console.log("===solution1===");
console.log(solution1(10, 3)); // 124000
console.log(solution1(64, 6)); // 768000
