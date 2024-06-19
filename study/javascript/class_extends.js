class A {
  constructor() {
    this.name = "A";
  }

  changeName() {
    this.add();
    return this.name;
  }
}

class B extends A {
  add() {
    this.name = this.name + "B";
  }
}

class C extends A {
  add() {
    this.name = this.name + "C";
  }
}

let b = new B();
let c = new C();

console.log(b.changeName());
console.log(c.changeName());
