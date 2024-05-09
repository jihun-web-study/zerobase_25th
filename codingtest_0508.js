// 1번
// n층 피라미드에 필요한 총 블럭 개수

function solution1(n) {
  let answer = 0;

  for (let idx = 1; idx <= n; idx++) {
    answer += idx;
  }

  return answer;
}

console.log(solution1(4) === 10);

// 2번
// num kg의 모래성, 1kg 미만이 되면 쓰러짐
// 흥민 vs 누나, 한사람이 한번에 가져갈 수 있는 양은 3,2,1
// 흥민이가 먼저 시작, 자신 차례에 1kg 이하 남으면 패배
// 입력된 num이 흥민이가 먼저 시작해서 이길 수 있는지 여부를 반환

function solution2(num) {
  /* if (num === 1) {
    return false;
  }
  if (num === 3) {
    return true;
  }
  return num % 3 === 1; */
  switch (num) {
    case 1:
      return false;
    case 3:
      return true;
    default:
      return num % 3 === 1;
  }
}

console.log(solution2(5) === false);
console.log(solution2(4) === true);

// 3번
// 정수배열 A에는 십만 전자의 일 단위 주식 가격
// 해당 주식 가격 기준으로 매수와 매도를 1회씩 진행했을때 가능한 최대 수익 구하기
// 수익을 내지 못하면 0을 리턴

function solution3(A) {
  let [buyPrice, maxProfit] = [A[0], 0];

  for (const currentPrice of A) {
    if (currentPrice > buyPrice) {
      maxProfit = Math.max(maxProfit, currentPrice - buyPrice);
    } else buyPrice = currentPrice;
  }

  return maxProfit;
}

console.log(solution3([100000, 99000, 99000, 98000, 97000]) === 0);
console.log(solution3([100000, 98000, 95000, 98000, 92000]) === 3000);

// 4번
// 0 이상의 정수 n
// n을 2진수로 바꿨을때 두 1사이의 가장 긴 거리를 출력

function solution4(n) {
  const bin = n.toString(2);
  let result = 1; // 정답값
  let count = 1; // 0 개수 세기

  for (const digit of bin) {
    if (digit === "0") {
      count += 1;
      result = Math.max(result, count);
    } else count = 1;
  }

  return result;
}

console.log(solution4(11) === 2);

// 5번
// 크기가 n인 숫자배열 nums와 숫자 d
// 0 <= a < b < n
// 아래 조건을 만족하는 a,b 쌍의 개수 반환
// nums[a] === nums[b] && nums[a] % d === 0

function solution5(nums, d) {
  const settedNums = [...new Set(nums)];

  const condition1 = (num) => nums.indexOf(num) !== nums.lastIndexOf(num);
  const condition2 = (num) => num % d == 0;

  const answer = settedNums.reduce(
    (count, num) => (condition1(num) && condition2(num) ? (count += 1) : count),
    0
  );

  return answer;
}

console.log(solution5([4, 1, 2, 1, 4], 2) === 1);
