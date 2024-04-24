/* 등수 매기기
영어 점수와 수학 점수를 담은 2차원 정수 배열 scores가 주어질 때,
 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return
*/
// sort 돌리고 앞의 값과 같으면 이전 인덱스값 반환하기
const solution = (scores) => {
  const sum = (arr) => arr.reduce((sum, num) => sum + num, 0);

  const averageArr = scores.map((v) => sum(v) / 2);

  const sortAverage = averageArr.toSorted((a, b) => b - a);

  const result = averageArr.map((avr) => sortAverage.indexOf(avr) + 1);

  return result;
};

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
); // [1, 2, 4, 3]
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
); // [4, 4, 6, 2, 2, 1, 7]

/* == 라이브 도중 추가 == */
