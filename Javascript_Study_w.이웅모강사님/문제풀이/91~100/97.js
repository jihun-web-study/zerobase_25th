/* 피보나치 수
피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.
*/

const fib = (n) => {
  let fibos = [0, 1];

  let innderFibo = (n) => {
    if (fibos[n] !== undefined) return fibos[n];
    fibos[n] = innderFibo(n - 1) + innderFibo(n - 2);
    return fibos[n];
  };

  return innderFibo(n);
};

console.log(fib(0)); // 0
console.log(fib(3)); // 2
console.log(fib(5)); // 5
console.log(fib(7)); // 13
console.log(fib(10)); // 55
console.time(1);
console.log(fib(30)); // 832040
console.timeEnd(1);

const fib2 = (n) => {
  let fibos = [0, 1];

  if (n < 2) return fibos[n];

  for (let idx = 2; idx <= n; idx++) {
    fibos[idx] = fibos[idx - 1] + fibos[idx - 2];
  }

  return fibos.at(-1);
};

console.log(fib2(0)); // 0
console.log(fib2(3)); // 2
console.log(fib2(5)); // 5
console.log(fib2(7)); // 13
console.log(fib2(10)); // 55
console.time(2);
console.log(fib2(30)); // 832040
console.timeEnd(2);

/* == 라이브 도중 추가 == */

// O(2^n) -> 시간복잡도가 매우 나쁨
const fib3 = (n) => (n < 2 ? n : fib3(n - 1) + fib3(n - 2));

console.log(fib3(0)); // 0
console.log(fib3(3)); // 2
console.log(fib3(5)); // 5
console.log(fib3(7)); // 13
console.log(fib3(10)); // 55
console.time(3);
console.log(fib3(30)); // 832040
console.timeEnd(3);
