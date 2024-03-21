import Joi from "joi";

const movieValidator = Joi.object({
  name: Joi.string().required().min(3).max(255).messages({
    "any.required": "Tên Movie là bắt buộc!",
    "string.empty": "Tên Movie không để trống!",
    "string.min": "Tên Movie phải có ít nhất 3 ký tự!",
    "string.max": "Tên Movie phải có ít hơn 255 ký tự!",
  }),
  poster: Joi.string(),
  director: Joi.string(),
  cast: Joi.string(),
  runingTime: Joi.number(),
  language: Joi.string(),
  rated: Joi.number(),
  trailer: Joi.string(),
  imgBanner: Joi.string(),
  category: Joi.string()
    .regex(/^[0-9a-fA-F]{24}$/)
    .required(),
  genres: Joi.array()
    .items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
    .required(),
}).options({
  abortEarly: false,
});

export default movieValidator;
