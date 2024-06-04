/* # 1 
주문번호는 주문 순서대로 1부터 1씩 증가
주문 취소 시, 해당 번호는 내역에서 제거
일부 주문이 최소된 주문 내역 배열 orders가 주어졌을 경우 n번째 주문 취소된 번호를 구하시오
*/
/**
 * @param {number[]} orders
 * @param {number} n
 * @return {number}
 */
function solution1(orders, n) {
  const canceledOrders = [];
  let order = 1;

  while (canceledOrders.length < n) {
    const isCanceledOrder = orders.includes(order);

    if (!isCanceledOrder) {
      canceledOrders.push(order);
    }

    order++;
  }

  return canceledOrders[n - 1];
}

console.log(1, solution1([2, 4, 5, 7], 3) === 6); //

/* # 2
정수 배열 arr의 값들 중에서 0에서 가장 가까운 값을 구하시오
*/
function solution2(arr) {
  const newArr = [...arr].sort((a, b) => a - b);
  //console.log(newArr[0]);
  return Math.min(...arr);
}

console.log(2, solution2([5, 2, 1, 3]) === 1); //

/* # 3
문자열 s가 주어질떄 제일 처음으로 두번 등장하는 문자를 출력
*/
function solution3(s) {
  const set = new Set();

  for (const c of s) {
    if (set.has(c)) return c;
    else set.add(c);
  }
}

console.log(3, solution3("google") === "o"); //
console.log(3, solution3("abcdea") === "a"); //

/* # 4

*/
function solution4(history, infected) {
  /* const contactList = new Set();
  const visitList = new Set();

  for (const entry of history) {
    const human = Math.abs(entry);

    if (entry > 0) {
      visitList.add(human);
    } else {
      console.log(human, visitList, contactList);

      if (visitList.has(infected) && human !== infected) {
        contactList.add(human);
      }

      visitList.delete(human);
    }
  }

  return [...contactList].sort((a, b) => a - b); */

  const entered = new Set();
  const contacted = new Set();
  let isEntered = false;

  for (const char of history) {
    const person = Math.abs(char);

    if (char > 0) {
      entered.add(person);
      if (person === infected) {
        contacted.add(person);
        isEntered = true;
      }
    } else {
      entered.delete(person);
      if (person === infected) {
        isEntered = false;
      }
    }

    if (isEntered) {
      for (const person of entered) {
        contacted.add(person);
      }
    }
  }

  const result = [];
  for (const person of contacted) {
    if (person !== infected) {
      result.push(person);
    }
  }

  return result.sort((a, b) => a - b);
}
console.log("====");
console.log(4, solution4([3, 2, -3, 1, -1, -2, 4, -4, 1, -1], 2)); // [1, 3]
console.log(4, solution4([3, -3, 1, -1, 2, -2, 4, -4, 1, -1], 2)); // [1, 3]

/* # 5
0부터 주어진 숫자 n까지의 모든 수을 2진수로 바꿀 때 1의 총 개수
*/
function solution5(n) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    const bin = i.toString(2);
    const convert = bin.replaceAll("0", "");
    count += convert.length;
  }

  return count;
}

console.log("====");
console.log(5, solution5(3) === 4); //
