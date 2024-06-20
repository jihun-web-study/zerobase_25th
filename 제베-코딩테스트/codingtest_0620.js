/* # 1 
라이프 수치가 담긴 정수 배열 cards
가장 높은 숫자 2장을 뽑고 각각을 x, y라 가정
- x == y : 둘다 소멸
- x > y : y카드 소멸, x = x-y로 카드뭉치에 넣음
- x < y : y카드 소멸, y = y-x로 카드뭉치에 넣음
위를 반복하다 카드가 1장 남으면 그 수치를, 없으면 0을 반환
*/
function solution1(cards) {
  let sortedCards = [...cards].sort((a, b) => a - b);
  while (sortedCards.length > 1) {
    // 카드 뽑기와 라이프 계산
    const x = sortedCards.pop();
    const y = sortedCards.pop();
    const life = Math.abs(x - y);

    // 카드 소멸 조건문, 재정렬
    if (life > 0) {
      sortedCards.push(life);
      sortedCards = [...sortedCards].sort((a, b) => a - b);
    }
  }

  return sortedCards[0] || 0;
}

console.log(1, solution1([4, 8, 6, 1, 2])); // 1

/* # 2
재난지원금용 평균 소득액 계산
직원들의 소득이 담긴 정수배열 arr

*/
function solution2(arr) {
  const length = arr.length;
  if (length === 3) return arr[1];

  const removeFirstLastArr = [...arr]
    .sort((a, b) => a - b)
    .filter((_, i) => i !== 0 && i !== length - 1);
  const sum = removeFirstLastArr.reduce((sum, num) => sum + num, 0);
  const avr = Math.trunc(sum / (length - 2));

  return avr;
}

console.log(2, solution2([2, 3, 3, 3, 20])); // 3
console.log(2, solution2([9, 4, 7, 5, 10, 4])); // 6

/* # 3
완전 이진탐색의 깊이 n이 들어왔을때
모든 노드의 개수를 구하여라
*/
function solution3(n) {
  const nodeCounts = BigInt(2) ** BigInt(n) - BigInt(1);
  const mod = BigInt(1_000_000_007);
  const answer = nodeCounts % mod;
  return Number(answer);
}

console.log(3, solution3(5)); // 31

/* # 4
국가 간 지역정보를 표시한 지도 A
국가간 연결된 정보를 바탕으로 가장 길게 연결돼있는 영토의 개수를 반환
*/
function solution4(A) {
  function sum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  const domains = A.map((v) => sum(v));

  return Math.max(...domains);
}

console.log(
  4,
  solution4([
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ])
); // 2

/* # 5

*/
function solution5(grid) {
  let result = 0;
  const iLength = grid.length;
  const jLength = grid[0].length;

  // 주변에 하나라도 0이 있는지 체크 &
  const checkZeroUndef = (i, j) => {
    if (i < 0 || j < 0 || i >= iLength || j >= jLength || grid[i][j] === "0") return;
    grid[i][j] = "0";
    checkZeroUndef(i + 1, j);
    checkZeroUndef(i - 1, j);
    checkZeroUndef(i, j + 1);
    checkZeroUndef(i, j - 1);
  };

  for (let i = 0; i < iLength; i++) {
    for (let j = 0; j < jLength; j++) {
      // 1인 셀만 반복문 진행
      if (grid[i][j] === "1") {
        result++;
        checkZeroUndef(i, j);
      }
    }
  }

  return result;
}

console.log(
  5,
  solution5([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
); // 1
