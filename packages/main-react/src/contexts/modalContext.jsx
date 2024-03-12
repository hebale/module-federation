import React, { useState, createContext } from "react";

export const ModalStateContext = createContext([]);
export const ModalDispatchContext = createContext({
  open: () => {},
  close: () => {},
});

const ModalProvider = ({ children }) => {
  const [activeModals, setActiveModals] = useState([]);

  const dispatch = {
    open: (props) => {
      setActiveModals((modals) => [...modals, props]);
    },
    close: (key) => {
      setActiveModals((modals) => modals.filter((modal) => modal.key !== key));
    },
  };

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalStateContext.Provider value={activeModals}>
        {children}
      </ModalStateContext.Provider>
    </ModalDispatchContext.Provider>
  );
};

export default ModalProvider;
