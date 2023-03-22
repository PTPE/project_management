const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const CLIENT_ID = "bf969790d4256f86647c";
const CLIENT_SECRET = "27743a3ff77d2e99804c0f3a78bee31f5dc4440c";
const app = express();
const PORT = 8080;
let token;

const fetchToken = async (code) => {
  const res = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}&redirect_uri=http://localhost:3000/redirect`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
};

app.get("/code/:dynamic", async (req, res) => {
  token = await fetchToken().access_token;
  const fetchUserData = await fetch(`https://api.github.com/user`, {
    headers: { Authorization: "token " + token },
    method: "GET",
  });
  const UserData = await fetchUserData.json();
  res.send([UserData, token]);
  console.log(UserData);
});
