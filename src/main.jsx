import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Galeria from "./routes/Galeria";
import ErrorPage from "./routes/ErrorPage";
import Artistas from "./routes/Artistas";
import Home from "./routes/Home";
import Sobre from "./routes/Sobre";

// Router Config
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sobre",
        element: <Sobre />,
      },
      {
        path: "artistas",
        element: <Artistas />,
      },
      {
        path: "galeria",
        element: <Galeria />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
