/* 잘라서 배열로 저장하기
str을 길이 n씩 잘라서 저장한 배열을 return
*/

const solution = (str, n) => {
  const res = [];

  for (let index = 0; index < str.length; index += n) {
    res.push(str.slice(index, index + n));
  }

  return res;
};

console.log(solution("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution("abcdef123", 3)); // ["abc", "def", "123"]

const solution2 = (str, n) => {
  return str.split("").reduce((acc, _, i) => {
    if (i % n === 0) {
      acc.push(str.slice(i, i + n));
    }
    return acc;
  }, []);
};

console.log(solution2("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution2("abcdef123", 3)); // ["abc", "def", "123"]

/* == 라이브 도중 추가 == */

const solution3 = (str, n) => {
  return Array.from({ length: Math.ceil(str.length / n) }, (_, i) => str.slice(i * n, i * n + n));
};

console.log(solution3("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution3("abcdef123", 3)); // ["abc", "def", "123"]

const solution4 = (str, n) => str.match(new RegExp(`.{1,${n}}`, "g"));

console.log(solution4("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution4("abcdef123", 3)); // ["abc", "def", "123"]
