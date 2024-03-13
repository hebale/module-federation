import React, { useContext } from "react";
import { AlertDispatchContext } from "@/provider/AlertContext";

const useAlert = () => {
  const { on, off } = useContext(AlertDispatchContext);
  const onAlert = props => on({ id: new Date().getTime(), ...props });
  const offAlert = id => off(id);

  return { onAlert, offAlert }
};

export default useAlert;