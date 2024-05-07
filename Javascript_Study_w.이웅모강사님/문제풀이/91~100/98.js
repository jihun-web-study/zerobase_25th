/* Best Time to Buy and Sell Stock
i번째 날의 주식 가격을 나타내는 prices 배열
수익을 극대화할 수 있는 날 주식을 사고 팔아서 얻을 수 있는 최대 수익을 반환
수익을 얻을 수 없으면 0을 반환
*/

// 풀기 실패
// 순회 말고는 잘 모르겠음
const maxProfit = (prices) => {
  const max = Math.max(...prices);
  const min = Math.min(...prices);

  if (prices.at(-1) === min) return 0;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log("========");

/* == 라이브 도중 추가 == */

const maxProfit2 = (prices) => {
  let [buyPrice, maxProfit] = [prices.at(0), 0];

  for (const currentPrice of prices) {
    if (currentPrice > buyPrice) maxProfit = Math.max(maxProfit, currentPrice - buyPrice);
    else buyPrice = currentPrice;
  }

  return maxProfit;
};

console.log(maxProfit2([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit2([7, 6, 4, 3, 1])); // 0
console.log("========");
