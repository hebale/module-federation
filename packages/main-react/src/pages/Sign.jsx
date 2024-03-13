import React, { useState } from 'react';
import { 
  Box,
  Stack,
  FormControl,
  InputLabel,
  InputAdornment,
  Button,
  Link,
  Typography,
  OutlinedInput,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { isEmailFormat, isPwFormat } from '@/utils/validation';
import { signUp } from '@/api/user';
import useAlert from '@/service/useAlert';

const Sign = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [errors, setErrors] = useState({ email: false, password: false, name: false });
  const { onAlert } = useAlert();
    
  const handleClickShowPassword = () => setShowPassword(bool => !bool);

  const onChangeData = event => {  
    const { target } = event;

    if(errors[target.name]) setErrors(errs => ({...errs, [target.name]: false}));
    setFormData(data => ({ ...data, [target.name]: target.value }));
  };

  const onClickSignUp = () => {
    try {
      if(Object.keys(formData).every(name => formData[name])) {
      
        if(!isEmailFormat(formData.email)) throw('이메일 확인')
        if(!isPwFormat(formData.password)) throw('패스워드 확인')

        // signUp(formData);
      } else {
        throw('모두 입력해주세요.')
      }
    } catch(message) {
      // console.log(message);
      onAlert({ type: 'error', children: message });
    }
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
          tesxtAlign: 'center'
        }}
      >      
        <FormControl error={errors.email} sx={{ m: 1 }} variant="outlined">
          <InputLabel>E-mail address</InputLabel>
          <OutlinedInput
            type='text'
            name="email"
            label="E-mail address"
            onChange={onChangeData}
          />
        </FormControl>

        <FormControl error={errors.password} sx={{ m: 1 }} variant="outlined">
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

        <FormControl error={errors.name} sx={{ m: 1 }} variant="outlined">
          <InputLabel>Name</InputLabel>
          <OutlinedInput
            type='text'
            name="name"
            label="Name"
            onChange={onChangeData}
          />
        </FormControl>

        <FormControl sx={{ m: 1, textAlign: 'center' }} variant="outlined">
          <Button
            variant="contained"
            size="large"
            sx={{ fontWeight: 700 }}
            onClick={onClickSignUp}
          >
            sign up
          </Button>

          <Stack sx={{
            display: 'flex',
            flexDirection: 'row',
            direction: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Typography
              sx={{
                display: 'inline-block',
                margin: '22px 10px 0 0'
              }}
            >
              Have an account?
            </Typography>
            <Link
              href="/login"
              sx={{ display: 'inline-block', width: 'auto', marginTop: 2 }}
            >
              Sign In
            </Link>
          </Stack>
        </FormControl>
      </Stack>
    </Box>
  )
}

export default Sign