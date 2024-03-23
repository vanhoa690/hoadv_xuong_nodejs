import Joi from "joi";

const registerValidate = Joi.object({
  username: Joi.string().min(3).max(10).required().messages({
    "any.required": "Username thieu roi",
    "string.min": "Username phai nhieu hon 3 ky tu",
  }),
  email: Joi.string().email().messages({
    "string.email": "Ko dung dinh dang email",
  }),
  password: Joi.string(),
  avatar: Joi.string(),
  role: Joi.string(),
}).options({
  abortEarly: false,
});

export { registerValidate };
