/* FizzBuzz
1부터 주어진 숫자 n까지 순회하면서 문자열을 생성해 배열에 담아 반환
3의 배수는 "Fizz", 5의 배수는 "Buzz", 3의 배수이면서 5의 배수는 "FizzBuzz"
어느 것도 참이 아닌 경우 순회중인 숫자를 문자열로 변환
*/

const fizzBuzz = (n) => {
  const fizzBuzzKey = {
    isMultiple3: "Fizz",
    isMultiple5: "Buzz",
    isMultiple15: "FizzBuzz",
  };

  const result = [];

  for (let number = 1; number <= n; number++) {
    if (number % 15 === 0) {
      result.push(fizzBuzzKey["isMultiple15"]);
      continue;
    }
    if (number % 3 === 0) {
      result.push(fizzBuzzKey["isMultiple3"]);
      continue;
    }
    if (number % 5 === 0) {
      result.push(fizzBuzzKey["isMultiple5"]);
      continue;
    }
    result.push(String(number));
  }

  return result;
};

console.log(fizzBuzz(3)); // ['1', '2', 'Fizz']
console.log(fizzBuzz(5)); // ['1', '2', 'Fizz', '4', 'Buzz']
console.log(fizzBuzz(20));
/* 
[
  '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', 
  '11', 'Fizz', '13', '14', 'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz'
]
*/
