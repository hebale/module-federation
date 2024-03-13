import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';
import Alert from '@/components/Alert';
import Modals from '@/components/Modals';
import ModalProvider from '@/provider/ModalContext';
import AlertProvider from '@/provider/AlertContext';

import "@/assets/style";

createRoot(document.querySelector("#app")).render(
  <BrowserRouter>
    {/* <ModalProvider> */}
      <AlertProvider>
        <Alert />
        <App />
        <Modals />
      </AlertProvider>
    {/* </ModalProvider> */}
  </BrowserRouter>
);
