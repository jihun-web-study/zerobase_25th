import { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserStore(props) {
  const [age, setAge] = useState(28);

  const user = {
    name: "Ji",
    age,
    changeAge: (updateAge) => setAge(updateAge),
  };

  return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
}
