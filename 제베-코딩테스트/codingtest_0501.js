function solution1(n) {
  const sqrt = Math.sqrt(n);

  const answer = new Set();

  for (let idx = 1; idx <= sqrt; idx++) {
    if (n % idx === 0) answer.add(idx).add(n / idx);
  }

  return [...answer].length;
}

console.log(solution1(16));

function solution2(s) {
  return [...new Set([...s])].length;
}

console.log(solution2("google")); // 5

function solution3(arr) {
  return arr.reduce(
    (evenCount, num) => (num % 2 === 0 ? (evenCount += 1) : evenCount),
    0
  );
}

console.log(solution3([1, 9, 9, 1, 3, 2, 6])); // 4

function solution4(s) {
  return parseInt(s, 16).toString(2); // 2
}

console.log(solution4("f4")); // "11110100"

function solution5(arr) {
  return arr.reduce((result, bin) => (result = result | parseInt(bin, 2)), 0);
}

console.log(solution5(["10110", "1010", "11110"]));
