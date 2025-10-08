import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root";
import Home from "./Components/Home/Home";
import App from "./Components/Apps/Apps";
import Installations from "./Components/Installations";
import AppDetails from "./Components/Apps/AppDetails";

const appsPromise = fetch("https://raw.githubusercontent.com/kawsar-hussain/ph-assignment-08/refs/heads/master/public/app.json").then((res) => res.json());

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
        path: "/app/details/:appId",
        loader: ({ params }) => {
          return fetch("https://raw.githubusercontent.com/kawsar-hussain/ph-assignment-08/refs/heads/master/public/app.json")
            .then((res) => {
              if (!res.ok) {
                throw new Error("Failed to fetch data");
              }
              return res.json();
            })
            .then((data) => {
              const app = data.find((item) => item.id === Number(params.appId));
              if (!app) {
                throw new Response("App not found", { status: 404 });
              }
              return app;
            });
        },
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
