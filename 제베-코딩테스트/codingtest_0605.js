/* # 1 
문자열 s에 대해서 연속된 문자들 지우기
*/
function solution1(s) {
  const answer = [];

  for (const c of s) {
    if (answer.at(-1) === c) answer.pop();
    else answer.push(c);
  }

  return answer.join("");
}

console.log(1, solution1("aacddefg")); // "cefg"

/* # 2
4가지 종류의 괄호가 있음
문자열 S가에 있는 괄호들이 교차하지않고 짝이 맞으면 1, 아니면 0을 반환
*/
function solution2(S) {
  const stack = [];

  for (const c of S) {
    if (c === "(" || c === "{" || c === "[" || c === "<") {
      stack.push(c);
    } else {
      switch (c) {
        case ")":
          if (stack.at(-1) === "(") {
            stack.pop();
            break;
          } else return 0;

        case "}":
          if (stack.at(-1) === "{") {
            stack.pop();
            break;
          } else return 0;

        case "]":
          if (stack.at(-1) === "[") {
            stack.pop();
            break;
          } else return 0;

        case ">":
          if (stack.at(-1) === "<") {
            stack.pop();
            break;
          } else return 0;

        default:
          return 0;
      }
    }
  }

  return +stack.length == 0 || 0;
}

console.log(2, solution2("(()){[<>]}")); // 1
console.log(2, solution2("({)}[<]>")); // 0

/* # 3
알파벳으로 이루어진 문자열 S
연속적으로 나오는 문자열 쌍을 소거했을때 빈 문자열이면 1, 아니면 0  반환
*/
function solution3(S) {
  const answer = [];

  for (const c of S) {
    if (answer.at(-1) === c) answer.pop();
    else answer.push(c);
  }

  return +(answer.join("") === "");
}

console.log(3, solution3("ABBA")); // 1

/* # 4
디자인 area가 입력될 경우 가로 w와 세로 h를 배열 [w, h]로 반환
*/
function solution4(area) {
  const sqrt = Math.sqrt(area);
  const stack = [];

  for (let i = 0; i <= sqrt; i++) {
    if (area % i === 0) stack.push(i);
  }

  const stackTail = stack.at(-1);

  return [stackTail, area / stackTail];
}

console.log(4, solution4(4)); // [2, 2]

/* # 5
입력된 중위 표기법 S를 후위 표기법으로 변환하여 반환
*/
function solution5(S) {
  const stack = [];
  let result = [];
  const newS = S.split(" ");

  for (const c of newS) {
    if (c === "(") stack.push(c);
    else if (c === ")") {
      while (stack.length && stack.at(-1) !== "(") {
        result.push(stack.pop());
      }
      stack.pop(); // '(' 제거
    } else if (c === "*" || c === "/") {
      while ((stack.length && stack.at(-1) === "*") || stack.at(-1) === "/") {
        result.push(stack.pop());
      }
      stack.push(c);
    } else if (c === "+" || c === "-") {
      while (stack.length && stack.at(-1) !== "(") {
        result.push(stack.pop());
      }
      stack.push(c);
    } else result.push(c);
  }

  while (stack.length) {
    result.push(stack.pop());
  }

  return result.join(" ");
}

console.log(5, solution5("1 + 2 * 3 * ( 2 + 3 )")); // "1 2 3 * 2 3 + * +"
console.log(5, solution5("( A + B ) * ( C + D )")); // "A B + C D + *"
