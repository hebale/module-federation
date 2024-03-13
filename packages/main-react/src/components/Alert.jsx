import React, { useContext } from "react";
import {
  Alert,
  Button
} from '@mui/material';
import { AlertStateContext, AlertDispatchContext } from "@/provider/AlertContext";

const Modals = () => {
  const alerts = useContext(AlertStateContext);
  const { off } = useContext(AlertDispatchContext);

  return alerts.map(alert => (
    <Alert
      key={alert.id}
      severity={alert.type ?? 'info'}
      action={
        <Button
          color="inherit"
          size="small"
          onClick={() => off(alert.id)}
        >
          UNDO
        </Button>
      }
    >
      {alert.children}
    </Alert>
  ));
};

export default Modals;
