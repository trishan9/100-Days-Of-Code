import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from "./App";
import { store } from "./store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ReduxProvider>
  </React.StrictMode>
);
