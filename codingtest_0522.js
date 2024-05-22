/* # 1 
n개의 문자를 보여주는 크기가 n인 전광판
문자는 오른쪽에서 왼쪽으로 1초마다 반복해서 흘러감
처음에는 .으로 가즉차 있고 
*/
function solution1(n, s, t) {
  /* const display = [".", ".", ".", ".", "."];
  const dots = ".".repeat(n);
  const newStr = s + dots;
  const duration = n + s.length;

  for (let idx = 0; idx < t; idx++) {
    display.shift();
    display.push(newStr[idx % duration]);
  }

  return display.join(""); */

  const text = ".".repeat(n) + s + ".".repeat(n - 1);

  const duration = n + s.length;

  const time = t % duration;

  const result = text.substring(time, time + n);
  return result;
}

console.log(1, solution1(5, "Snowball", 18) === "Snowb");

/* # 2
문자열 s는 대소문자, 숫자, 구분자('.', ',', '!', '?', ' ')
구분가 기준으로 단어를 구분하고 각 단어를 뒤집은 배열을 반환하라
*/
function solution2(s) {
  const splitS = s.split(/[.,!? ]/g).filter(Boolean);
  const res = splitS.map((v) => v.split("").reverse().join(""));

  return res;
}

console.log(2, solution2("Hello, World!?")); // ["olleH", "dlroW"]

/* # 3
0보다 큰 숫자들로 이루어진 정수배열 A가 들어왔을때 최대 공약수를 구하여라
*/
function solution3(A) {
  const getGCD = (num1, num2) => {
    while (num2 > 0) {
      let r = num1 % num2;
      num1 = num2;
      num2 = r;
    }

    return num1;
  };

  const result = A.reduce((res, num, idx, arr) => {
    if (idx === 0) return res;
    if (idx === 1) {
      res = getGCD(arr[idx - 1], num);
      return res;
    }

    res = getGCD(res, num);

    return res;
  }, 1);

  return result;
}

console.log(3, solution3([6, 12, 4]) === 2);

/* # 4
마피아게임
N명의 멤버들은 같은 숫자 카드, 단 2명만 다른 숫자 카드
멤버는 최소 5명, 마피아는 무조건 2명
마피아인 멤버의 인텍스를 오름차순으로 출력
*/
function solution4(members) {
  const cards = [...new Set(members)];

  const cardA = members.filter((v) => v === cards[0]);
  const cardB = members.filter((v) => v === cards[1]);
  const mafiaCard = cardA.length > cardB.length ? cardB[0] : cardA[0];

  const result = members.reduce((res, v, i) => {
    if (v === mafiaCard) res.push(i);
    return res;
  }, []);

  return result;
}

console.log(4, solution4([11, 13, 11, 11, 13])); // [1, 4]

/* # 5
정수 A, B의 소인수 분해의 집합이 동일하면 1, 아니면 0을 반환
*/
function solution5(A, B) {
  const getPrimeNumbers = (num) => {
    const primeNumbers = [];
    let divisor = 2;
    let n = num;

    while (n >= 2) {
      if (n % divisor === 0) {
        primeNumbers.push(divisor);
        n = n / divisor;
      } else divisor++;
    }

    return [...new Set(primeNumbers)];
  };

  const APrimeNumbers = getPrimeNumbers(A);
  const BPrimeNumbers = getPrimeNumbers(B);

  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  return +equals(APrimeNumbers, BPrimeNumbers);
}

console.log(5, solution5(12, 6) === 1);
console.log(5, solution5(9, 18) === 0);
