import React from "react";
import { useRouter } from "next/router";
import BottomButton from "../src/components/BottomButton";

export default function complete() {
  const router = useRouter();
  const { username, device, accessory } = router.query;

  console.log(username, device, accessory);

  return (
    <>
      <div>
        <strong>{username}</strong>님이 선택하신 장비는 <strong>{device}</strong>, 악세서리는
        <strong>{accessory}</strong>입니다.
      </div>
      <div>
        맞으시다면 제출하기 버튼,다시 선택 하시려면 첫 화면으로 돌아가기 버튼을 클릭해주세요.
      </div>
      <button onClick={() => console.log("제출완료")}>제출하기</button>
      <br />
      <button onClick={() => router.push("/")}>돌아가기</button>
    </>
  );
}
