import Http from "~/utils/http";

export const signUp = ({ name, email, password }) =>
  Http.post({
    path: "/api/signup",
    body: { name, email, password },
  });

export const signIn = ({ email, password }) =>
  Http.post({
    path: "/api/sigin",
    body: { email, password },
  });
