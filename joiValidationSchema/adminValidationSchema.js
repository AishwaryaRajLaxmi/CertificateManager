const Joi = require("joi");

// createAdminSchema
module.exports.createAdminSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  mobile: Joi.string()
    .pattern(/^[6-9][0-9]{9}$/)
    .required()
    .messages({
      "string.min": "Must have at least 10 digits",
      "object.regex": "Must have at least 10 digits",
      "string.pattern.base": "Must enter a valid mobile number",
    }),
  password: Joi.string().min(6).required(),
  about: Joi.string().allow(""),
});

// updateAdminSchema
module.exports.updateAdminSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  mobile: Joi.string()
    .pattern(/^[6-9][0-9]{9}$/)
    .required()
    .messages({
      "string.min": "Must have at least 10 digits",
      "object.regex": "Must have at least 10 digits",
      "string.pattern.base": "Must enter a valid mobile number",
    }),
  password: Joi.string().min(6),
  about: Joi.string().allow(""),
});

// loginAdminSchema
module.exports.loginAdminSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});


