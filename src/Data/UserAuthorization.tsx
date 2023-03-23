import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserProvider";

export const UserAithorization = () => {
  const [code, setCode] = useState("");
  const ContextValue = useContext(UserContext);

  const fetchUserData = async () => {
    try {
      const res = await fetch(`/code/${code}`);
      const data = await res.json();
      if (!res.ok) throw new Error("Authorization fails");
      ContextValue.setUser({ owner: data[0].login, token: data[1] });
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    const currentUrl = window.location.href;
    const getCode = () => {
      const code = currentUrl.slice(currentUrl.indexOf("=") + 1);
      setCode(code);
    };
    if (currentUrl.includes("code")) getCode();
  }, []);

  useEffect(() => {
    if (!code) return;
    fetchUserData()
      .then((_) => window.location.assign("http://localhost:3000/issue"))
      .catch((_) => window.location.assign("http://localhost:3000/login"));
  }, [code]);
};
