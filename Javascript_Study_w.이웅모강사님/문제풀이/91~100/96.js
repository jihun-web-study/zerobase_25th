/* 조건 문자열
- 두 수가 `n`과 `m`이라면
    - ">", "=" : `n` >= `m`
    - "<", "=" : `n` <= `m`
    - ">", "!" : `n` > `m`
    - "<", "!" : `n` < `m`
두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나
 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return
*/

const solution = (ineq, eq, n, m) => {
  const method = {
    ">=": n >= m,
    "<=": n <= m,
    ">!": n > m,
    "<!": n < m,
  };

  return +method[`${ineq}${eq}`];
};

console.log(solution("<", "=", 20, 50)); // 1
console.log(solution(">", "!", 41, 78)); // 0

/* == 라이브 도중 추가 == */
