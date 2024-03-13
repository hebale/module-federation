import React, { useContext } from "react";
import { Stack, Alert, Collapse } from "@mui/material";
import { TransitionGroup } from "react-transition-group";

import {
  AlertStateContext,
  AlertDispatchContext,
} from "@/provider/AlertContext";

const Modals = () => {
  const alerts = useContext(AlertStateContext);
  const { close } = useContext(AlertDispatchContext);

  return (
    <Stack
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <TransitionGroup>
        {alerts.map((alert) => {
          setTimeout(() => {
            close(alert.id);
          }, alert.timer ?? 2000);

          return (
            <Collapse key={alert.id}>
              <Alert
                severity={alert.type ?? "info"}
                onClose={() => close(alert.id)}
              >
                {alert.text}
              </Alert>
            </Collapse>
          );
        })}
      </TransitionGroup>
    </Stack>
  );
};

export default Modals;
