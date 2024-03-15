import React, { useState, createContext } from "react";
import type { ReactNode } from "react";
import type { AlertStateType, AlertDispetchType } from "~/types/components";

export const AlertStateContext = createContext([]);
export const AlertDispatchContext = createContext({
  open: () => {},
  close: () => {},
});

const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alerts, setAlerts] = useState<AlertStateType[]>([]);

  const dispatch: AlertDispetchType = {
    open: (alert) => {
      setAlerts((alerts) => [...alerts, alert]);
    },
    close: (id) => {
      setAlerts((alerts) => alerts.filter((alert) => alert.id !== id));
    },
  };

  return (
    <AlertDispatchContext.Provider value={dispatch}>
      <AlertStateContext.Provider value={alerts}>
        {children}
      </AlertStateContext.Provider>
    </AlertDispatchContext.Provider>
  );
};

export default AlertProvider;
