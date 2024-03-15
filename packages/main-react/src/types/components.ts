export type AlertStateType = {
  id?: number;
  type: "success" | "info" | "warning" | "error";
  text: string;
  timer?: number;
};

export type AlertDispetchType = {
  open: (alert: AlertStateType) => void;
  close: (id: number) => void;
};
