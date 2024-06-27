/* # 1 
낱말 게임, 패턴이 주어졌을때 패턴대로 낱말을 골라 순서에 맞게 연속해서 말하기
p: 문자열 패텬, s: 답안, return: 
*/
function solution1(p, s) {
  const pattern = new Set(p);
  const answerS = new Set(s.split(" "));

  return pattern.size === answerS.size;
}

console.log(1, solution1("가나다라", "바나나 드래곤 스리랑카 오염")); // true
console.log(1, solution1("갸가갸가", "금도끼 은도끼 철도끼 은도끼")); // false

/* # 2
중복된 문자를 제거한후, 총 문자의 개수
*/
function solution2(s) {
  return new Set(s.split(" ")).size;
}

console.log(2, solution2("Hello world Nice world")); // 3

/* # 3
두 배열에 동시에 존재하는 숫자들을 모아 오름차순으로 정렬
*/
function solution3(arr1, arr2) {
  const result = [];
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const shorterSet = arr1.length <= arr2.length ? set1 : set2;
  const longerSet = arr1.length <= arr2.length ? set2 : set1;

  for (const num of shorterSet) {
    if (longerSet.has(num)) result.push(num);
  }

  return result.sort((a, b) => a - b);
}

console.log(3, solution3([1, 7, 8, 4], [2, 4, 6, 8])); // [4, 8]
console.log(3, solution3([9, 1, 1, 4, 1, 2, 3, 4], [5, 6, 10, 12])); // []

/* # 4

*/
function solution4(arr) {
  for (let i = 1; i < arr.length; i++) {
    const parent = arr[Math.floor((i - 1) / 2)];
    const child = arr[i];
    if (child < parent) return "NO";
  }

  return "YES";
}

console.log(4, solution4([0, 5, 10, 15])); // 'YES'
console.log(4, solution4([0, 20, 22, 17])); // 'NO'

/* # 5
맞팔 관계인 쌍의 개수
*/
function solution5(A) {
  let answer = 0;
  const followMap = new Map();

  for (const [follower, followed] of A) {
    let key1 = follower + "-" + followed;
    let key2 = followed + "-" + follower;

    if (followMap.has(key2)) {
      answer++;
      followMap.delete(key2);
    } else {
      followMap.set(key1, true);
    }
  }

  return answer;
}

console.log(
  5,
  solution5([
    ["철수", "영희"],
    ["영희", "진수"],
    ["진수", "동수"],
    ["진수", "진호"],
    ["영희", "철수"],
  ])
); // 1
