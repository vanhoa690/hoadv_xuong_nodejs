import Joi from "joi";

const registerValidator = Joi.object({
  username: Joi.string().min(3).max(10).required().messages({
    "any.required": "Username thieu roi",
    "string.min": "Username phai nhieu hon 3 ky tu",
  }),
  email: Joi.string().email().messages({
    "string.email": "Ko dung dinh dang email",
  }),
  password: Joi.string().required(),
  avatar: Joi.string(),
  role: Joi.string(),
}).options({
  abortEarly: false,
});

const loginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).options({
  abortEarly: false,
});

export { registerValidator, loginValidator };
