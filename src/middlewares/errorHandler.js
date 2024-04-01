import { StatusCodes } from "http-status-codes";

const errorHanlder = (err, req, res, next) => {
  if (!err.statusCode) err.statusCode = StatusCodes.BAD_REQUEST;
  const errResponse = {
    statusCode: err.statusCode,
    message: err.message || StatusCodes[err.statusCode],
    stack: err.stack,
  };
  res.status(errResponse.statusCode).json(errResponse);
};

export default errorHanlder;
