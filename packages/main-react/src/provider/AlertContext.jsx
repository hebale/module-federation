import React, { useState, createContext } from "react";
import Alert from "@/components/Alert";

export const AlertStateContext = createContext([]);
export const AlertDispatchContext = createContext({
  open: () => {},
  close: () => {},
});

const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const dispatch = {
    open: (props) => {
      setAlerts((alerts) => [...alerts, props]);
    },
    close: (id) => {
      setAlerts((alerts) => alerts.filter((alert) => alert.id !== id));
    },
  };

  return (
    <AlertDispatchContext.Provider value={dispatch}>
      <AlertStateContext.Provider value={alerts}>
        <Alert />
        {children}
      </AlertStateContext.Provider>
    </AlertDispatchContext.Provider>
  );
};

export default AlertProvider;
