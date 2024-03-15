import React, { useState } from "react";
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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { isEmailFormat, isPwFormat } from "~/utils/validation";
import useAlert from "~/service/useAlert";
import { signIn } from "~/api/user";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const { openAlert } = useAlert();

  const handleClickShowPassword = () => setShowPassword((bool) => !bool);

  const onChangeData = (event) => {
    const { target } = event;

    if (errors[target.name]) {
      setErrors((errs) => ({ ...errs, [target.name]: false }));
    }
    setFormData((data) => ({ ...data, [target.name]: target.value }));
  };

  const onClickLogin = () => {
    const { email, password } = formData;

    try {
      if (!email || !isEmailFormat(email)) {
        setErrors((errs) => ({ ...errs, email: true }));
        throw "이메일을 확인해 주세요.";
      }
      if (!password || !isPwFormat(password)) {
        setErrors((errs) => ({ ...errs, password: true }));
        throw "비밀번호를 확인해 주세요.";
      }

      // signIn(formData);
    } catch (message) {
      openAlert({ type: "error", text: message, timer: 2000 });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        spacing={1.5}
        sx={{
          margin: "0 auto",
          width: "350px",
          tesxtAlign: "center",
        }}
      >
        <FormControl size="small" error={errors.email} variant="outlined">
          <InputLabel>E-mail address</InputLabel>
          <OutlinedInput
            type="text"
            name="email"
            label="E-mail address"
            onChange={onChangeData}
          />
        </FormControl>

        <FormControl size="small" error={errors.password} variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            name="password"
            label="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={onChangeData}
          />
        </FormControl>

        <FormControl sx={{ textAlign: "center" }} variant="outlined">
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 1.5, fontWeight: 700 }}
            onClick={onClickLogin}
          >
            Login
          </Button>
          <Link href="/sign" sx={{ mt: 3 }}>
            sign up
          </Link>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default Login;
