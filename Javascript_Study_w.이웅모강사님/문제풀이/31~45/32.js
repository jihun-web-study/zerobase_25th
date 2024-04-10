/* 배열 뒤집기
정수가 들어 있는 배열 nums가 매개변수로 주어집니다. nums의 원소의 순서를 거꾸로 뒤집은 배열을 return
*/

const solution = (arr) => {
  // 배열의 깊은 복사
  const copyArr = JSON.parse(JSON.stringify(arr));

  return copyArr.reverse();
};

console.log(solution([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(solution([1, 1, 1, 1, 1, 2])); // [2, 1, 1, 1, 1, 1]
console.log(solution([1, 0, 1, 1, 1, 3, 5])); // [5, 3, 1, 1, 1, 0, 1]

/* == 라이브 도중 추가 == */
