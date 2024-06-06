import cards from "data/cards";
import { useRef, useState } from "react";

const Lottery = () => {
  const [chosen, setChosen] = useState([]);

  function getRandomNumbers(n) {
    if (n < 3) {
      throw new Error("n은 최소 3 이상이어야 합니다.");
    }

    // 0부터 n-1까지의 숫자로 이루어진 배열 생성
    let numbers = Array.from({ length: n }, (_, i) => i);

    // Fisher-Yates 셔플 알고리즘
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // 섞인 배열에서 처음 3개의 숫자 선택
    return numbers.slice(0, 3);
  }

  const test = () => {
    setChosen(getRandomNumbers(10));
    /* const number = 7;
    const person = cards[number];
    console.log(number, person); */
  };

  const ChosenPerson = ({ info }) => {
    const { company, team, name, phoneNumber, email } = info;

    return (
      <div>
        <div>{company}</div>
        <div>{team}</div>
        <div>{name}</div>
        <div>{phoneNumber}</div>
        <div>{email}</div>
      </div>
    );
  };

  const ref = useRef(null);

  const test2 = () => {
    console.log(ref.current.offsetHeight);
    console.log(ref.current.offsetHeight);
  };

  return (
    <div>
      <h1 ref={ref}>추첨</h1>
      <button onClick={test}>추첨하기</button>
      {chosen?.map((v) => (
        <ChosenPerson info={cards[v]} key={v} />
      ))}
    </div>
  );
};

export default Lottery;
