import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Contacts from "./pages/Contacts";
import MapsCharts from "./pages/MapsCharts";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClientProvider } from "react-query";
import queryClient from "./queryClient";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Contacts />} />
      <Route path="/maps-charts" element={<MapsCharts />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
