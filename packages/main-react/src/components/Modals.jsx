import React, { createElement, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Modal, Typography, Button, Link } from "@mui/material";
import {
  ModalStateContext,
  ModalDispatchContext,
} from "@/provider/ModalContext";

const Modals = () => {
  const modals = useContext(ModalStateContext);
  const { close } = useContext(ModalDispatchContext);

  return modals.map((modal) => {
    return (
      <Modal open={true} key={modal.id}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 240,
            padding: 4,
            tranform: "translate(-50%, -50%)",
            background: "#f5f5f5",
            boxShadow: 6,
            textAlign: "center",
          }}
        >
          <Button onClick={() => close(modal.id)}>닫기</Button>
          {modal?.body}

          {/* <Typography
            variant='h3'
            component='h2'
            sx={{ mb: 1, color: '#1565c0' }}
          >
             {count}
          </Typography>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center'
            }}
          >
            <Link href="/login" sx={{ fontWeight: 800 }}>로그인 페이지</Link>
            <Typography component='p'>로 이동합니다.</Typography>
          </Stack> */}
        </Box>
      </Modal>
    );
  });
};

export default Modals;
