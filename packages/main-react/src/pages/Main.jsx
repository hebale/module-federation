import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Box,
  Stack,
  Modal,
  Typography,
  Link
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Gnb from '@/layout/Gnb';
import Header from '@/layout/Header';
import Section from '@/layout/Section';

import useModal from '@/service/useModal';

import Http from '@/utils/http';
import { loginAuth } from '@/api/auth';

const Main = () => {
  const [count, setCount] = useState(5);
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();
    
  useEffect(() => {


    // console.log(
    //   localStorage.getItem('accessToken') 

    // )
    // if(loginAuth({})){

    // }




    // openModal({
    //   id: 'loginInfo',
    //   body: (
    //     <>
    //       <Stack
    //         sx={{
    //           display: 'flex',
    //           flexDirection: 'row',
    //           justifyContent: 'center',
    //           alignContent: 'center'
    //         }}
    //       >
    //         <Link href="/login" sx={{ fontWeight: 800 }}>로그인 페이지</Link>
    //         <Typography component='p'>로 이동합니다.</Typography>
    //       </Stack>
    //     </>
    //   )
    // })

    // const timer = setTimeout(() => {
    //   closeModal('loginInfo');
    //   // navigate('/login');
    //   Http.headers = {
    //     ...Http.headers,
    //     'test' : 'test'
    //   }

    //   setCount(count => count + 1)
    // }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <Modal
        open={open}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 240,
            padding: 4,
            tranform: 'translate(-50%, -50%)',
            background: '#f5f5f5',
            boxShadow: 6,
            textAlign: 'center'
          }}
        >
          <Typography
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
          </Stack>
        </Box>
      </Modal> */}

      <Container
        component="main"
        disableGutters={true}
        maxWidth={false}
        sx={{ height: '100vh' }}
        >
        <Header />
        <Grid
          component="section"
          container={true}
          direction="row"
          sx={{ height: '100%' }}
          >
          <Gnb />
          <Section />
        </Grid>
      </Container>
    </>
  )  
}

export default Main;