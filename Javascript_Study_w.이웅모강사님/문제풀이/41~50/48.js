/* 첫 번째로 나오는 음수
정수 리스트 nums가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return
*/

const solution = (nums) => nums.findIndex((num) => num < 0);

console.log(solution([12, 4, 15, 46, 38, -2, 15])); // 5
console.log(solution([13, 22, 53, 24, 15, 6])); // -1

/* == 라이브 도중 추가 == */

const solution2 = (nums) => nums.indexOf(-2);

console.log(solution2([12, 4, 15, 46, 38, -2, 15])); // 5
console.log(solution2([13, 22, 53, 24, 15, 6])); // -1
