import React, { useState } from 'react';
import { 
  Box,
  Stack,
  FormControl,
  InputLabel,
  InputAdornment,
  Button,
  Link,
  OutlinedInput,
  IconButton,
  Typography
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleClickShowPassword = () => setShowPassword(bool => !bool);

  const onChangeData = event => {  
    const { target } = event;
    setFormData(data => ({...data, [target.name]: target.value }));
  };

  const onClickLogin = () => {
    console.log(formData)
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Stack
        spacing={2}
        sx={{
          margin: '0 auto',
          width: '280px',
          height: '300px',
          tesxtAlign: 'center'
        }}
      >  
        <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel>E-mail address</InputLabel>
          <OutlinedInput
            type='text'
            name="email"
            label="E-mail address"
            onChange={onChangeData}
          />
        </FormControl>

        <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput            
            type={showPassword ? 'text' : 'password'}
            name="password"
            label="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={onChangeData}
          />
        </FormControl>

        <FormControl sx={{ m: 1, textAlign: 'center' }} variant="outlined">
          <Button
            variant="contained"
            size="large"
            sx={{ fontWeight: 700 }}
            onClick={onClickLogin}
          >
            Login
          </Button>
          <Link
            href="/sign"
            sx={{ marginTop: 2 }}
          >
            Sign up
          </Link>
        </FormControl>
      </Stack>
    </Box>
  )
}

export default Login