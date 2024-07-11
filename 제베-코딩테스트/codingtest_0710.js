/* # 1 
길위 사과나무, 오렌지 나무
사과 열매 하나당 1점, 오렌지 열매 하나당 -1점
최소 길이 1 이상으로 연속된 구간을 선택하여 만들 수 있는 최고 점수를 출력
*/
function solution1(fruits) {
  let current = -Infinity;
  let result = -Infinity;

  for (const fruit of fruits) {
    /* console.table({
      fruit,
      current,
      FpluseC: current + fruit,
      max: Math.max(fruit, current + fruit),
      result,
    }); */

    current = Math.max(fruit, current + fruit);
    if (current > result) result = current;
  }

  return result;
}

console.log(1, solution1([-2, 5, -3, 6, 8, -1, -5, 3])); // 16

/* # 2
직선 0 지점에서 시작
n 미터 떨어진 목적지로 가야함
한번에 k 이하의 정수 거리만큼 이동 가능
직전에 이동한 거리만큼 연속 이동은 불가능 // 2 - 3 - 3 : 불가능
*/
function solution2(n, k) {
  const MOD = 1_000_000_007;
  let dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

  dp[0][0] = 1;
  //console.log(dp);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= k; j++) {
      if (dp[i][j] > 0) {
        for (let step = 1; step <= k; step++) {
          if (step !== j && i + step <= n) {
            dp[i + step][step] = (dp[i + step][step] + dp[i][j]) % MOD;
          }
        }
      }
    }
  }

  let result = 0;
  for (let j = 1; j <= k; j++) {
    result = (result + dp[n][j]) % MOD;
  }

  //console.log(dp, result);
  return result;
}

console.log(2, solution2(5, 3)); // 4

/* # 3
정수 배열 A가 주어질때 연속 합이 가장 큰 수열의 합을 반환하시오
만약 합이 음수인 경우 0을 반환하시오
*/
function solution3(A) {
  let current = -Infinity;
  let result = -Infinity;

  for (const num of A) {
    current = Math.max(num, current + num);
    if (current > result) result = current;
  }

  return result < 0 ? 0 : result;
}

console.log(3, solution3([2, -8, 3, -2, 4, -10])); // 5

/* # 4
h x w 격자판이 있으며 왼쪽 위가 시작점, 오른쪽 아래가 종료지점
말은 오른쪽이나 아래로만 이동 가능
게임일 이기는 경우의 수를 출력
*/
function solution4(h, w) {
  let dp = Array.from({ length: h }, () => Array(w).fill(0));
  dp[0][0] = 1;

  // 첫번째 가로줄 1로 세팅
  for (let j = 1; j < w; j++) {
    dp[0][j] = 1;
  }

  // 모든 줄의 1열을 1로 세팅
  for (let i = 1; i < h; i++) {
    dp[i][0] = 1;
  }

  // 왼쪽과 위쪽 값 더하기
  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[h - 1][w - 1];
}

console.log(4, solution4(2, 3)); // 3

/* # 5
n층의 피라미드의 꼭대기에서 1층으로 내려와 탈출
피라미드에는 방이 있으며 n층에는 1개의 방, n-1층에는 2개의 방... 1층에는 n개의 방이 존재
각 방은 왼쪽아래와 오른쪽 아래의 방으로 이동하는 계단이 존재
각 방에는 j개의 보석이 존재
피라미드를 탈출하며 얻을 수 있는 보석의 최대 개수
*/
// 테스트 케이스 마지막에서 실패함
function solution5(arr) {
  let result = arr[0][0];

  let j = 0;

  for (let i = 1; i < arr.length; i++) {
    let left = arr[i][j];
    let right = arr[i][j + 1];

    console.log({ result, i, j, left, right });

    if (left < right) j = j + 1;
    result += Math.max(left, right);
  }

  return result;
}
const gems = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]; // 30
console.log(5, solution5([[3], [5, 10], [4, 8, 6], [1, 2, 3, 4]])); // 21
console.log(5, solution5(gems)); // 30

// 피라미드 아래부터 보석 개수를 누적하여 저장해서 꼭대기에서 카운팅하는 방식
function test(arr) {
  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] += Math.max(arr[i + 1][j], arr[i + 1][j + 1]);
    }
  }

  console.log(arr);

  return arr[0][0];
}

console.log("test ", test([[3], [5, 10], [4, 8, 6]]));
console.log(test(gems));
