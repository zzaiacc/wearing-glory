//? Components
import MainPage from "./components/MainPage";
import ErrorPage from "./ErrorPage";
import BrasilTeams from "./components/BrasilTeams";
import Palmeiras from "./components/TeamsPage/Palmeiras";
import Vasco from "./components/TeamsPage/Vasco";
import SaoPaulo from "./components/TeamsPage/SaoPaulo";

//? Dependencies
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//? CSS
import "./index.css";

//setando rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/brasil",
    element: <BrasilTeams />,
  },
  {
    path: "/brasil/palmeiras",
    element: <Palmeiras />,
  },
  {
    path: "/brasil/vasco",
    element: <Vasco />,
  },
  {
    path: "/brasil/saoPaulo",
    element: <SaoPaulo />,
  },
  {
    path: "/mainPage",
    element: <MainPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
