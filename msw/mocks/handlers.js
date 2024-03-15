import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/user", ({ request, params, cookies }) => {
    console.log(request, params, cookies);

    return HttpResponse.json({
      name: "윤종규",
      gender: "남",
    });
  }),
];

export default handlers;
