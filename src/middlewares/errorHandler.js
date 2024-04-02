import { StatusCodes } from "http-status-codes";
const errorHandler = (err, req, res, next) => {
  // new Error : status : 400, 500, messgase: Error(messgase)
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const errorMessage =
    err.message || StatusCodes[StatusCodes.INTERNAL_SERVER_ERROR];
//   console.error(err.stack);
// notify slack
// send mail
// sentry
  res.status(statusCode).json({
    name: err.name,
    message: errorMessage,
  });
};

export default errorHandler;
