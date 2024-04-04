/* swap
2개 이상의 정수 요소를 가지는 배열과 2개의 인덱스를 전달받아 두 개의 요소값을 바꾼 배열을 반환
*/

/* 공통 사항: 원본 보존을 위해 내부에 복사하기 */
const swap1 = (arr, i, j) => {
  // temp 변수 두기
  const innerArr = [...arr];
  const temp = innerArr[i];
  innerArr[i] = innerArr[j];
  innerArr[j] = temp;

  return innerArr;
};

const swap2 = (arr, i, j) => {
  // 구조 분해 할당
  const innerArr = [...arr];
  [innerArr[i], innerArr[j]] = [innerArr[j], innerArr[i]];
  return innerArr;
};

const arr = [1, 2, 3, 4];

console.log("===solution1===");
console.log(swap1(arr, 1, 2)); // [1, 3, 2, 4]
console.log("===solution2===");
console.log(swap2(arr, 1, 2)); // [1, 3, 2, 4]
