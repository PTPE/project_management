import { useState, useEffect } from "react";

export const UserAuthorization = () => {
  const [code, setCode] = useState("");

  const fetchUserData = async () => {
    try {
      const res = await fetch(`/code/${code}`);
      const data = await res.json();
      if (!res.ok) throw new Error("Authorization fails");
      const storedData = { owner: data[0].login, token: data[1] };
      localStorage.setItem("user", JSON.stringify(storedData));
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
      .then(
        (_) =>
          !(localStorage.getItem("user")?.length === 0) &&
          window.location.assign("http://localhost:3000/issue")
      )
      .catch((_) => window.location.assign("http://localhost:3000/login"));
  }, [code, localStorage.getItem("user")]);
};
