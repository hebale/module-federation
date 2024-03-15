// Object to String
export const objectToString = (params) => {
  return Object.keys(params)
    .map((value) => `${value}=${params[value]}`)
    .join("&");
};
