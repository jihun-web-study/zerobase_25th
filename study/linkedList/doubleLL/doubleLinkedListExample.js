import CircularLinkedList from "./doublelinkedListDefine.js";

const cll = new CircularLinkedList();
console.log(cll);

cll.append(1);
console.log(cll);
cll.append(10);
console.log(cll.size());
cll.printNode();

console.log(cll.head);
console.log(cll.head.next);
console.log(cll.head.next.next);

console.log("====");
cll.append(1000, 2);
cll.printNode();

console.log("====");
cll.insert(100, 2);
cll.printNode();

console.log(cll.indexOf(100));

console.log("====");
console.log(cll.remove(100));
cll.printNode();
console.log(cll.removeAt(1));
cll.printNode();
