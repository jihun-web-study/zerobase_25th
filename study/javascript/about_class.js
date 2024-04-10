class UserInfo {
  constructor() {
    this.name = "";
    this.hp = 0;
    this.class = "none";
  }

  getHP() {
    return this.hp;
  }
}

const david = new UserInfo();

console.log(david.getHP());

david.hp = 3;

console.log(david.getHP());
