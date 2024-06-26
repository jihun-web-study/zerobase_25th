import React from "react";
import { useRouter } from "next/router";
import BottomButton from "../src/components/BottomButton";

export default function start() {
  const router = useRouter();
  const { username } = router.query;
  console.log(1, username);

  return (
    <>
      <strong>{username || "제로베이스"}님, 입사를 축하드립니다!</strong>
      <div>원하시는 개발 장비를 선택해주세요.</div>
      <BottomButton routeURL={"/device-choice"} query={{ username: username }}>
        장비 선택하러 가기
      </BottomButton>
    </>
  );
}
