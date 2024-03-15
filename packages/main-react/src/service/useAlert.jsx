import React, { useContext } from "react";
import { AlertDispatchContext } from "~/provider/AlertContext";

const useAlert = () => {
  const { open, close } = useContext(AlertDispatchContext);
  const openAlert = (props) => open({ id: new Date().getTime(), ...props });
  const closeAlert = (id) => close(id);

  return { openAlert, closeAlert };
};

export default useAlert;
