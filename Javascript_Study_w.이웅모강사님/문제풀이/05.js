/* 각도기
각 `angle`이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return
- 예각 : 0 < `angle` < 90
- 직각 : `angle` = 90
- 둔각 : 90 < `angle` < 180
- 평각 : `angle` = 180

0 < angle ≤ 180
*/

const solution1 = (angle) => {
  // 다중 if문 - 특수각 조건
  if (angle < 90) return 1;
  else if (angle === 90) return 2;
  else if (angle < 180) return 3;
  else return 4;
};

console.log("===solution1===");
console.log(solution1(70)); // 1
console.log(solution1(90)); // 2
console.log(solution1(91)); // 3
console.log(solution1(180)); // 4
