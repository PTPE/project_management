import { createContext, useState } from "react";

interface UserProps {
  children: React.ReactNode;
}

const UserDefault = {
  user: { token: "", owner: "" },
  CLIENT_ID: "bf969790d4256f86647c",
  setUser: (user: { token: ""; owner: "" }) => {},
};

export const UserContext = createContext(UserDefault);

export const UserProvider = (props: UserProps) => {
  const [user, setUser] = useState(UserDefault.user);
  const CLIENT_ID = "bf969790d4256f86647c";

  return (
    <UserContext.Provider value={{ user, CLIENT_ID, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
