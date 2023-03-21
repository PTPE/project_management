import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Homepage } from "./Page/Homepage";
import { RedirectPage } from "./Page/RedirectPage";
import { IssuePage } from "./Page/IssuePage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./Data/UserProvider";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Homepage />,
  },
  { path: "/redirect", element: <RedirectPage /> },
  { path: "/issue", element: <IssuePage /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
