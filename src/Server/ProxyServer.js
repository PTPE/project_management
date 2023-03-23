const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const CLIENT_ID = "bf969790d4256f86647c";
const CLIENT_SECRET = "27743a3ff77d2e99804c0f3a78bee31f5dc4440c";
const app = express();
const PORT = 8080;
let token;

app.get("/code/:dynamic", async (req, res) => {
  const code = req.params.dynamic;
  console.log(code);
  const fetchTokenData = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}&redirect_uri=http://localhost:3000/redirect`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
      },
    }
  );
  const tokenData = await fetchTokenData.json();
  token = await tokenData.access_token;
  const fetchUserData = await fetch(`https://api.github.com/user`, {
    headers: { Authorization: "token " + token },
    method: "GET",
  });
  const UserData = await fetchUserData.json();
  console.log(UserData);
  res.send([UserData, token]);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
// const express = require("express");
// const fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(...args));
// const CLIENT_ID = "bf969790d4256f86647c";
// const CLIENT_SECRET = "27743a3ff77d2e99804c0f3a78bee31f5dc4440c";
// const app = express();
// const PORT = 8080;
// let token;

// app.post("/post", (_, res) => {
//   console.log("Connected to React");
//   res.redirect("/");
// });

// app.get("/code/:dynamic", async (req, res) => {
//   const code = req.params.dynamic;
//   const fetchTokenData = await fetch(
//     `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}&redirect_uri=http://localhost:3000/redirect`,
//     {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//       },
//     }
//   );
//   const tokenData = await fetchTokenData.json();
//   token = await tokenData.access_token;
//   const fetchUserData = await fetch(`https://api.github.com/user`, {
//     headers: { Authorization: "token " + token },
//     method: "GET",
//   });
//   const UserData = await fetchUserData.json();
//   res.send([UserData, token]);
//   console.log(UserData);
// });

// app.get("/test/:dynamic", (req, res) => {
//   const test = req.params.dynamic;
//   res.send([1, 2, 3]);
// });

// app.listen(PORT, console.log(`Server started on port ${PORT}`));
