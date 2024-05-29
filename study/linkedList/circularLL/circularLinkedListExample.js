import LinkedList from "./linkedListDefine.js";

let ll = new LinkedList();
console.log(ll);
ll.printNode();

ll.append(123);
ll.append(456);
ll.append(789);

console.log(ll);
ll.printNode();

ll.insert(1);

let ll2 = new LinkedList();
console.log(ll2);

ll2.insert(1);
ll2.insert(2, 1);
ll2.insert(4, 2);
ll2.printNode();
ll2.insert(3, 2);
ll2.printNode();
ll2.append(2);
ll2.printNode();

ll2.remove(2);
ll2.printNode();

console.log(`====`);

ll2.removeAt();
ll2.printNode();
ll2.removeAt(1);
ll2.printNode();

console.log(`====`);

ll2.append(5);
ll2.append(6);
ll2.printNode();

console.log(ll2.indexOf(5));
