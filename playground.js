console.log(1);

let a = 111111111111111111111111111111111111111111111111;

console.log(typeof null);
console.log(typeof undefined);

let obj = { a: 2 };
let arr = [3];

console.log(Object.keys(obj));
console.log(Object.keys(arr));

/* let x = 5,
  result;
result = x + 1;

console.log(result, x); */

if (!false) console.log(false + " is falsy value");
if (!undefined) console.log(undefined + " is falsy value");
if (!null) console.log(null + " is falsy value");
if (!0) console.log(0 + " is falsy value");
if (!NaN) console.log(NaN + " is falsy value");
if (!"") console.log("" + " is falsy value");

console.log("x");
console.log(!"x");
console.log(!!"x");

let aa = 1;
let bb = aa;
bb += 1;
console.log(aa, bb);

const test = (a, b) => console.log(a, b);

test(aa, bb);

function add(a, b) {
  // arguments 숨어있음
  console.log(arguments); //
  return a + b;
}

add(1, 2, 3); // 3

function add(a, b) {
  if (a === undefined || b === undefined) {
    throw new Error("두 숫자를 입력해주세요.");
  }
  return a + b;
}

console.log(typeof 1);

/* add(1); */

function test1(a, b) {
  let x = 1;

  console.log(1, x);
}

x = 11;

console.log(x);

const value = 2;

console.log(3);

const objojb = { 1: [1, 2] };
console.log(2);
console.log(objojb);
