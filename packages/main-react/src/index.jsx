import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "@/App";
import Modals from "@/components/Modals";

import ModalProvider from "./contexts/modalContext";

import "@/assets/style";

createRoot(document.querySelector("#app")).render(
  <BrowserRouter>
    <ModalProvider>
      <App />
      <Modals />
    </ModalProvider>
  </BrowserRouter>
);
