import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./routes/Routes.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient , QueryClientProvider} from "@tanstack/react-query";


export const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
<QueryClientProvider client={queryClient}>
      <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
</QueryClientProvider>
  </StrictMode>
);
