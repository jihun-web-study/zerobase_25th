/* 배열 만들기 6
0과 1로만 이루어진 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk을 만듬
i의 초기값을 0으로 설정하고 i가 arr의 길이보다 작으면 다음을 반복
- 만약 stk이 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합
- `stk`에 원소가 있고, `stk`의 마지막 원소가 `arr[i]`와 같으면 `stk`의 마지막 원소를 `stk`에서 제거하고 `i`에 1을 더합니다.
- `stk`에 원소가 있는데 `stk`의 마지막 원소가 `arr[i]`와 다르면 `stk`의 맨 마지막에 `arr[i]`를 추가하고 `i`에 1을 더합니다.

stk을 return, 빈 배열을 return 해야한다면 [-1]을 return
*/

const solution = (arr) => {
  // do something
  const length = arr.length;

  let i = 0;
  const stk = [];

  while (i < length) {
    const stkLength = stk.length;

    if (stkLength === 0) stk.push(arr[i]);
    else if (stk[stkLength - 1] !== arr[i]) {
      stk.push(arr[i]);
    } else {
      stk.pop();
    }

    i += 1;
  }

  return stk.length === 0 ? [-1] : stk;
};

console.log(solution([0, 1, 1, 1, 0])); // [0, 1, 0]
console.log(solution([0, 1, 0, 1, 0])); // [0, 1, 0, 1, 0]
console.log(solution([0, 1, 1, 0])); // [-1]

/* == 라이브 도중 추가 == */
