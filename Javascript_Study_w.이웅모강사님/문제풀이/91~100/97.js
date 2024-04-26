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
console.log(fib(30)); // 832040

/* == 라이브 도중 추가 == */
