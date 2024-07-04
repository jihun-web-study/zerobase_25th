/* # 1 
무인도에 갇힌 N명의 인원이 보트로 탈출
보트: 최대 2인, 무게제한으로 limit이 주어짐
*/
function solution1(A, limit) {
  let answer = 0;
  let p1 = 0;
  let p2 = A.length - 1;

  const newA = [...A].sort((a, b) => a - b);

  while (p1 <= p2) {
    if (newA[p1] + newA[p2] <= limit) p1 += 1;
    p2 -= 1;
    answer += 1;
  }

  return answer;
}

console.log(1, solution1([45, 50, 51, 49, 90, 70], 100)); // 4

/* # 2
0 ~ 100까지의 숫자 카드 게임
n개를 미리 뽑고 아래 룰대로 점수 계산
 - 점수: 0부터 시작, i: 1부터 시작
 - i가 홀수인 경우: 점수 = i번째카드숫자 * i
 - i가 짝수인 경우: 점수 = i번째카드숫자 * -i
 
*/
function solution2(A) {
  // 카드를 오름차순으로 정렬하여 가운데부터 i=1를 적용
  A.sort((a, b) => a - b);
  let x = Math.floor(A.length / 2);
  let odd = x + 1;
  let even = x - 1;
  let answer = A[x];
  let i = 2; // 위 answer에 사실상 i = 1를 곱한거기 떄문

  while (i <= A.length) {
    if (i % 2 !== 0) {
      answer += A[odd++] * i;
    } else {
      answer += A[even--] * -i;
    }
    i++;
  }
  return answer;
}

console.log(2, solution2([1, 2, 3, 4, 5])); // 32

/* # 3

*/
function solution3(A) {
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
  let change = A;
  let changeCount = 0;

  for (const c of currency) {
    if (change <= 0) break;
    changeCount += Math.trunc(change / c);
    change %= c;
  }

  return changeCount;
}

console.log(3, solution3(12345)); // 11

/* # 4

*/
function solution4(puzzle, word) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function dfs(x, y, index) {
    if (index === word.length) {
      return true;
    }

    if (x < 0 || x >= 4 || y < 0 || y >= 4 || puzzle[x][y] !== word[index]) {
      return false;
    }

    let temp = puzzle[x][y];

    puzzle[x][y] = "#";

    for (let dir of directions) {
      const nextX = x + dir[0];
      const nextY = y + dir[1];
      if (dfs(nextX, nextY, index + 1)) {
        puzzle[x][y] = temp;
        return true;
      }
    }

    puzzle[x][y] = temp;

    return false;
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

console.log(
  4,
  solution4(
    [
      ["대", "한", "가", "나"],
      ["국", "민", "다", "라"],
      ["마", "바", "사", "아"],
      ["자", "차", "카", "타"],
    ],
    "대한민국"
  )
); // true

/* # 5 ==> 나중에 다시 풀어보기
3x3 격자의 두더지 게임판
state: 두더지 상태 -> 0: 들어가있는 상태, 1: 나와 있는 상태
linkName: 스위치 index에 연결된 두더지 번호
모든 두더지를 나오게 하기 위해 눌러야 하는 최소한의 스위치 횟수를 반환
  -> 모든 두더지를 나오게 할 수 없으면 -1 반환
*/
function solution5(State, linkName) {
  /*   
  function moles(State, switchIndex) {
    for (let moleIndex of linkName[switchIndex]) {
      State[moleIndex] = 1 - State[moleIndex];
    }
  }

  function molesUp(State) {
    return State.every((mole) => mole === 1);
  }

  let minSwitch = Infinity;
  const count = linkName.length;

  for (let toggleMask = 0; toggleMask < 1 << count; toggleMask++) {
    let currentSwitches = 0;
    let currentState = State.slice();

    for (let i = 0; i < count; i++) {
      if (toggleMask & (1 << i)) {
        moles(currentState, i);
        currentSwitches++;
      }
    }

    if (molesUp(currentState)) {
      minSwitch = Math.min(minSwitch, currentSwitches);
    }
  }

  return minSwitch === Infinity ? -1 : minSwitch; */

  const numSwitches = linkName.length;

  function toggleMoles(switchIndex, currentState) {
    console.log("before: ", switchIndex, currentState);

    for (const mole of linkName[switchIndex]) {
      currentState[mole] = 1 - currentState[mole];
    }

    console.log("after: ", switchIndex, currentState);
  }

  // 격자판이 모두 1인지 판별
  function isAllMolesOut(currentState) {
    return currentState.every((mole) => mole === 1);
  }

  function dfs(currentState, switchIndex, switchesPressed) {
    console.log("\ndfs start: ", currentState, switchIndex, switchesPressed);

    if (isAllMolesOut(currentState)) {
      if (minSwitches === -1 || switchesPressed < minSwitches) {
        minSwitches = switchesPressed;
      }
      return;
    }

    if (minSwitches !== -1 && switchesPressed >= minSwitches) {
      return;
    }

    if (switchIndex >= numSwitches) {
      return;
    }

    console.log("\nfirst");
    toggleMoles(switchIndex, currentState);
    dfs(currentState, switchIndex + 1, switchesPressed + 1);

    console.log("\nsecond");
    toggleMoles(switchIndex, currentState);
    dfs(currentState, switchIndex + 1, switchesPressed);
  }

  let minSwitches = -1;

  const initialState = [...State];

  dfs(initialState, 0, 0);

  return minSwitches;

  console.log(State, linkName);
}

console.log(
  5,
  solution5(
    [1, 0, 1, 0, 0, 1, 1, 1, 1],
    [[1], [7], [8], [4, 7], [1, 3], [3, 4, 8], [0], [6], [2], [1, 4]]
  )
); // 3
