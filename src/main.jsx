import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./services/router.jsx";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./services/query.js";
import "../src/index.css";
import "./services/axios.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
