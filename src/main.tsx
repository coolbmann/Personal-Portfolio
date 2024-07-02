import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.tsx";
import Noggin from "./pages/project-detail/Noggin.tsx";
import ContractGenerator from "./pages/project-detail/ContractGenerator.tsx";
import Padlock from "./pages/project-detail/Padlock.tsx";
import OnCue from "./pages/project-detail/OnCue.tsx";
import Resume from "./pages/project-detail/Resume.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "homepage",
        element: <Homepage />,
      },
      {
        path: "projects/noggin",
        element: <Noggin />,
      },
      {
        path: "projects/contract-generator",
        element: <ContractGenerator />,
      },
      {
        path: "projects/padlock",
        element: <Padlock />,
      },
      {
        path: "projects/oncue",
        element: <OnCue />,
      },
      {
        path: "projects/my-portfolio",
        element: <Resume />,
      },
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
