import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/PublicRoutes.jsx";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container mx-auto">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>
);
