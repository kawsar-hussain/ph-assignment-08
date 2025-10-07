import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root";
import Home from "./Components/Home";
import App from "./Components/App";
import Installations from "./Components/Installations";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/app",
        Component: App,
      },
      {
        path: "/installations",
        Component: Installations,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
