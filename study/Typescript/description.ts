interface LengthWise {
  length: number;
}

function identity<T extends LengthWise>(arg: T) {
  return arg.length;
}

console.log(identity("hello")); // 5
console.log(identity({ arg: "hello", length: 100 })); //100

// 타입 단언 as => 의도와 다르게 타입이 추론될때 타입을 단언해주는 용도
let a: unknown = "hi";
//let b = a.length; // unknown으로 인해 에러뜸
let c = (a as string).length;

// 타입 서술어 is => 리턴 타입이 타입 서술어인 함수를 정의할때 사용
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFishWithoutIs(pet: Fish | Bird) /* : pet is Fish */ {
  return (pet as Fish).swim !== undefined;
}

function isFishWithIs(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const fish: Fish = { swim: () => console.log("swim") };
const bird: Bird = { fly: () => console.log("swim") };

console.log(isFishWithoutIs(fish));
console.log(isFishWithoutIs(bird));
console.log("");
console.log(isFishWithIs(fish));
console.log(isFishWithIs(bird));
console.log("");

// is 미사용으로 인해 타입 가드 안됨
/* function action1(pet: Fish | Bird) {
  if (isFishWithoutIs(pet)) pet.swim();
  else pet.fly();
} */

function action2(pet: Fish | Bird) {
  if (isFishWithIs(pet)) pet.swim();
  else pet.fly();
}

// {property} in {Object} => {Object} 객체 안에 해당 속성이 있는지 체크하는 연산자
const obj = { name: "Kim" };
console.log("name" in obj);
console.log("age" in obj);

// {object} instaceof {constructor} => {object}의 prototype안에 {constructor}가 있는지 판별
// 즉, 해당 인스턴스(object)가 Class({constructor})의 인스턴스인지 판별
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const human = new User("Kim");
console.log(human instanceof User); // true
console.log(human instanceof Object); // true
