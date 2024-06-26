import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { fetchUser } from "../src/modules/api";

export default function start() {
  const router = useRouter();

  useEffect(() => {
    (async function fetch() {
      const user = await fetchUser();
      console.log(user.name);
      router.push({
        pathname: "/start",
        query: { username: user.name },
      });
    })();
  }, []);

  return <div>페이지 이동 중...</div>;
}
