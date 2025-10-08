import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root";
import Home from "./Components/Home/Home";
import App from "./Components/Apps/Apps";
import Installations from "./Components/Installations";
import AppDetails from "./Components/Apps/AppDetails";

const appsPromise = fetch("/app.json").then((res) => res.json());

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
        element: (
          <Suspense
            fallback={
              <div className="loader">
                <img src="/logo.png"></img>
              </div>
            }
          >
            <App appsPromise={appsPromise}></App>
          </Suspense>
        ),
      },
      {
        path: "/installations",
        Component: Installations,
      },
      {
        path: "/app/details/:appid",
        Component: AppDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
