import React, { createElement, useContext } from "react";
import {
  ModalStateContext,
  ModalDispatchContext,
} from "@/contexts/modalContext";

const Modals = () => {
  const modals = useContext(ModalStateContext);
  const { close } = useContext(ModalDispatchContext);

  return modals.map((modal) => {
    return (
      <div key={modal.id}>
        <div>
          <div>{modal?.title}</div>
          <section>{modal?.children}</section>
          <div>{modal?.button()}</div>
        </div>
      </div>
    );
  });
};

export default Modals;
