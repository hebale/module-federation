import Http from "~/utils/http";

export const loginAuth = () => Http.get({ path: "/user" });
