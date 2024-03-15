import Http from "~/utils/http";

export const signUp = ({ name, email, password }) =>
  Http.post({
    path: "/api/signup",
    body: { name, email, password },
  });

export const login = ({ email, password }) =>
  Http.post({
    path: "/api/login",
    body: { email, password },
  });
