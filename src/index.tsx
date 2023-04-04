import ReactDOM from "react-dom/client";
import "./index.css";
import { Homepage } from "./Page/Homepage/Homepage";
import { RedirectPage } from "./Page/RedirectPage/RedirectPage";
import { IssuePage } from "./Page/IssuePage/IssuePage";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
root.render(<RouterProvider router={router} />);

reportWebVitals();
