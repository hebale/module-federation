import React, { useContext } from "react";
import { ModalDispatchContext } from "@/contexts/modalContext";

const useModal = () => {
  const { open, close } = useContext(ModalDispatchContext);
  const openModal = (props) => {
    open({ id: new Date().getTime(), ...props });
  };

  // const closeModal =  => {
  //   close
  // };

  return { openModal };
};

export default useModal;
