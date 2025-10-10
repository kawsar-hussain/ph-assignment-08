import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "./mobile.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Components/Root";
import Home from "./Components/Home/Home";
import Apps from "./Components/Apps/Apps";
import Installations from "./Components/Installations";
import AppDetails from "./Components/Apps/AppDetails";
import AppNotFound from "./Components/Apps/AppNotFound";
import ErrorPage from "./Components/ErrorPage";

const appsPromise = fetch("/app.json").then((res) => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
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
              <div className="flex flex-col justify-center items-center h-[90vh]">
                <p className="flex text-5xl font-bold text-gray-500 mb-8 tracking-widest">
                  Lo
                  <div className="loader">
                    <img src="/logo.png"></img>
                  </div>
                  ding...
                </p>
              </div>
            }
          >
            <Apps appsPromise={appsPromise}></Apps>
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
          return fetch("/app.json")
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
        errorElement: <AppNotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
