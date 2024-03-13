import React, { useContext } from "react";
import { ModalDispatchContext } from "@/provider/ModalContext";

const useModal = () => {
  const { open, close } = useContext(ModalDispatchContext);
  const openModal = (props) => {
    open({ id: new Date().getTime(), ...props });
  };
  const closeModal = (id) => close(id);

  return { openModal, closeModal };
};

export default useModal;