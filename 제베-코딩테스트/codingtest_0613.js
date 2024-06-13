/* # 1 
+-로만 이루어진 계산식 s가 주어질 때 계산 결과를 출력하시오.
*/
function solution1(s) {
  let convertS = s.split(/([+-])/).filter((v) => v !== "");
  let plusMinus = [];
  let answer = 0;

  for (const c of convertS) {
    const isPlusMinus = c === "+" || c === "-";

    if (isPlusMinus) plusMinus.push(c);
    else {
      const numC = Number(c);

      if (plusMinus.length === 0) answer += numC;
      else {
        let op = plusMinus.pop();
        if (op === "-") answer -= numC;
        else answer += numC;
      }
    }
  }

  return answer;
}

console.log(1, solution1("-3+26-7")); // 16

/* # 2

*/
function solution2(bj, one, two) {
  const finalPrice = (one.length * 1 + two.length * 2 + 3) * 150;
  const concatOneTwo = one.concat(two);
  const winner = bj.filter((item) => !concatOneTwo.includes(item))[0];

  return `${finalPrice}만원(${winner})`;
}

console.log(
  2,
  solution2(["혁준", "하밥", "양상", "심심이", "소스왕"], ["혁준", "양상"], ["심심이", "소스왕"])
); // 하밥

/* # 3
N개의 정수 배열 arr
이 중 3개를 골라 삼각형 만들고
둘레가 가장 긴 삼각형을 찾아 둘레 길이 반환
*/
function solution3(arr) {
  const sorted = arr.sort((a, b) => a - b);
  let answer = 0;
  let count = sorted.length;

  while (count > 2) {
    const [last, secondLast, thirdLast] = [sorted.at(-1), sorted.at(-2), sorted.at(-3)];

    if (last < secondLast + thirdLast) return last + secondLast + thirdLast;
    sorted.pop();
    count--;
  }

  return answer;
}

console.log(3, solution3([6, 2, 12, 8, 5, 9])); // 29
console.log(3, solution3([5, 19, 4, 23, 198, 34])); // 76
console.log(3, solution3([1, 2, 5, 60, 50, 7])); // 0

/* # 4
문자열 배열 arr
겹치는 문자열 반환
*/
/**
 * @param arr {string[]}
 * @returns {string[]}
 */
function solution4(arr) {
  let answer = new Set(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    let target = new Set(arr[i]);
    answer = new Set([...answer].filter((char) => target.has(char)));
  }

  return [...answer].sort((a, b) => a.localeCompare(b));
}

console.log(4, solution4(["apple", "naver"])); // ["a", "e"];

/* # 5
5
*/
function solution5() {
  let answer = new Set(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    let target = new Set(arr[i]);
    answer = new Set([...answer].filter((char) => target.has(char)));
  }
  return [...answer].sort((a, b) => a.localeCompare(b));
}

console.log(5, solution5()); //
