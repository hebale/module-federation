import React, { useState, createContext } from "react";

export const AlertStateContext = createContext([]);
export const AlertDispatchContext = createContext({
  on: () => {},
  off: () => {},
});

const AlertProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);

  const dispatch = {
    on: props => setAlerts(alerts => [...alerts, props]),
    off: id => setAlerts(alerts => alerts.filter(alert => alert.id !== id))
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
