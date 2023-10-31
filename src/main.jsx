import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Detail from "./pages/Detail/Content";

import "../node_modules/react-vis/dist/style.css";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/all",
    element: <App />,
  },
  {
    path: "/detail/coin/:name",
    element: <Detail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="w-full max-h-screen bg-black overflow-hidden">
    <RouterProvider router={router} />
  </div>
);
