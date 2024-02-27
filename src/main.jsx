import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import store from "./store/store.js";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PuppyList from "./features/PuppyList.jsx";
import PuppyPlayer from "./features/PuppyPlayer.jsx";
import Root from "./layout/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <PuppyList /> },
      { path: "/players", element: <PuppyList /> },
      { path: "/players/:id", element: <PuppyPlayer /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
