import React, { useState } from "react";
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
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { isEmailFormat, isPwFormat } from "~/utils/validation";
import useAlert from "~/service/useAlert";
import { signUp } from "~/api/user";

const Sign = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [errors, setErrors] = useState({
    name: false,
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

  const onClickSignUp = () => {
    const { name, email, password } = formData;

    try {
      if (!name) {
        setErrors((errs) => ({ ...errs, name: true }));
        throw "이름을 확인해 주세요.";
      }
      if (!email || !isEmailFormat(email)) {
        setErrors((errs) => ({ ...errs, email: true }));
        throw "이메일을 확인해 주세요.";
      }
      if (!password || !isPwFormat(password)) {
        setErrors((errs) => ({ ...errs, password: true }));
        throw "비밀번호를 확인해 주세요.";
      }

      // signUp(formData);
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
        <FormControl size="small" error={errors.name} variant="outlined">
          <InputLabel>Name</InputLabel>
          <OutlinedInput
            type="text"
            name="name"
            label="Name"
            onChange={onChangeData}
          />
        </FormControl>

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
          <FormHelperText sx={{ ml: 0 }}>
            영문(대/소문자), 숫자, 특수문자(!@#$%^*+=) 조합 8자 이상
          </FormHelperText>
        </FormControl>

        <FormControl sx={{ textAlign: "center" }} variant="outlined">
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 1.5, fontWeight: 700 }}
            onClick={onClickSignUp}
          >
            sign up
          </Button>

          <Stack
            sx={{
              display: "flex",
              direction: "column",
              flexDirection: "row",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <Typography sx={{ mr: 1.5 }}>Have an account?</Typography>
            <Link href="/login">sign in</Link>
          </Stack>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default Sign;
