/* average
숫자 배열 scores가 주어지면 모든 요소의 평균을 반환
*/

const average = (scores) => {
  console.time();
  const length = scores.length;
  console.timeEnd();
  if (!length) return 0;

  const sum = scores.reduce((sum, num) => sum + num, 0);

  return Math.round(sum / length);
};

// 왜 얘만 length 체크에서 시간 늘어지는지 모르겠음...
console.log(average([73, 82, 99])); // 85

console.log(average([50, 100, 90, 45, 70])); // 71

console.log(average([100])); // 100

console.log(average([])); // 0

/* == 라이브 도중 추가 == */
// 1줄로 줄이기
const average2 = (scores) =>
  Math.round(scores.reduce((sum, num) => sum + num, 0) / scores.length) || 0;

console.log(average2([73, 82, 99])); // 85
console.log(average2([50, 100, 90, 45, 70])); // 71
console.log(average2([100])); // 100
console.log(average2([])); // 0
