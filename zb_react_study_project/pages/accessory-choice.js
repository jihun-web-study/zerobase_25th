import React, { useState } from "react";
import BottomButton from "../src/components/BottomButton";
import { useRouter } from "next/router";
import Radio from "../src/components/Radio";

export default function accessoryChoice() {
  const router = useRouter();
  const { username, device } = router.query;
  const [accessory, setAccessory] = useState("모니터");

  const accessories = ["모니터", "키보드"];

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (value) => {
    setAccessory(value);
  };

  return (
    <>
      <strong>accessoryChoice</strong>
      <form onSubmit={onSubmitHandler}>
        {accessories.map((v, i) => (
          <Radio
            key={i}
            name={v}
            value={v}
            label={v}
            checked={v === accessory}
            onChangeHandler={onChangeHandler}
          />
        ))}
        <BottomButton
          routeURL={"/complete"}
          query={{ username: username, device: device, accessory: accessory }}
        >
          제출하러 가기
        </BottomButton>
      </form>
    </>
  );
}
