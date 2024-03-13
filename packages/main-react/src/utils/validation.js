export const isEmailFormat = string => /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(string);
export const isPwFormat = string => /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=])(?=.*[0-9]).{8,}$/.test(string);