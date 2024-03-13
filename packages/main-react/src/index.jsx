import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@/App";
import Modals from "@/components/Modals";
import ModalProvider from "@/provider/ModalContext";

import AlertProvider from "@/provider/AlertContext";
import "@/assets/style";

createRoot(document.querySelector("#app")).render(
  <BrowserRouter>
    <AlertProvider>
      <App />
      <Modals />
    </AlertProvider>
  </BrowserRouter>
);
