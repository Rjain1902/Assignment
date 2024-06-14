import React from "react";
import ReactDOM from "react-dom/client";
import Tab1 from "./Components/Tabs/Tab1";
import { Layout } from "./Components/Layout";
import "./index.css";
import { Provider } from "react-redux";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Tab2 from "./Components/Tabs/Tab2";
import Tab3 from "./Components/Tabs/Tab3";
import store from "./store/index";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Tab1 />} />
      <Route path="Tab2" element={<Tab2 />} />
      <Route path="Tab3" element={<Tab3 />} />
    </Route>
  )
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
