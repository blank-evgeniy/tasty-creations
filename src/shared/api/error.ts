export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message;

  return message
    ? typeof message === "object"
      ? message[0]
      : message
    : error.message;
};
