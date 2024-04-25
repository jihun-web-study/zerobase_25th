/* 배열 만들기 4
정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk

i	arr[i]	stk
0	  1	    []
1	  4     [1]
2	  2     [1, 4]
2	  2     [1]
3	  5     [1, 2]
4	  3     [1, 2, 5]
4	  3     [1, 2]
-	  -     [1, 2, 3]
*/

const solution = (arr) => {
  // do something
  const length = arr.length;

  let i = 0;
  const stk = [];

  while (i < length) {
    const stkLength = stk.length;

    if (stkLength === 0 || stk[stkLength - 1] < arr[i]) {
      stk.push(arr[i]);
      i += 1;
    } else {
      stk.pop();
    }
  }

  return stk;
};

console.log(solution([1, 4, 2, 5, 3])); // [1, 2, 3]
console.log(solution([100, 1])); // 처음에 stk에 초기값 넣으면 에러나는 반례

/* == 라이브 도중 추가 == */
// array[length - 1] 안쓰고 .at 쓰기
const solution2 = (arr) => {
  // do something
  const length = arr.length;

  let i = 0;
  const stk = [];

  while (i < length) {
    const stkLength = stk.length;

    if (stkLength === 0 || stk.at(-1) < arr[i]) {
      stk.push(arr[i]);
      i += 1;
    } else {
      stk.pop();
    }
  }

  return stk;
};

console.log(solution2([1, 4, 2, 5, 3])); // [1, 2, 3]
console.log(solution2([100, 1])); // 처음에 stk에 초기값 넣으면 에러나는 반례
