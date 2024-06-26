import React, { useState } from "react";
import BottomButton from "../src/components/BottomButton";
import { useRouter } from "next/router";
import Radio from "../src/components/Radio";

export default function deviceChoice() {
  const router = useRouter();
  const { username } = router.query;
  const [device, setDevice] = useState("아이맥");

  const devices = ["아이맥", "맥북"];

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (value) => {
    setDevice(value);
  };

  return (
    <>
      <strong>deviceChoice</strong>
      <form onSubmit={onSubmitHandler}>
        {devices.map((v, i) => (
          <Radio
            key={i}
            name={v}
            value={v}
            label={v}
            checked={v === device}
            onChangeHandler={onChangeHandler}
          />
        ))}
        <BottomButton routeURL={"/accessory-choice"} query={{ username: username, device: device }}>
          악세서리 선택하러 가기
        </BottomButton>
      </form>
    </>
  );
}
