const Joi = require("joi");
const {
  Types: {
    ObjectId: { isValid },
  },
} = require("mongoose");

// for createCertificate and updateCertificate

module.exports.defineCertificateSchema = Joi.object({
  // serialNumber: Joi.string().required(),
  name: Joi.string().required(),
  fatherName: Joi.string().required(),
  mobileNumber: Joi.string()
    .required()
    .pattern(/^[6-9][0-9]{9}$/)
    .messages({
      "string.min": "Must have at least 10 digits",
      "object.regex": "Must have at least 10 digits",
      "string.pattern.base": "Must enter a valid mobile number",
    }),
  // certificateNumber: Joi.string().required(),
  session:Joi.string().required(),
  certificateName: Joi.string().required(),
  instituteName: Joi.string().required(),
  batchStartDate: Joi.date().required(),
  batchEndDate: Joi.date().required(),
  dateOfIssue: Joi.date().required(),
  refPerson: Joi.string(),
});

//getAllCertificatesSchema
module.exports.getAllCertificatesSchema = Joi.object({
  skip: Joi.number(),
  limit: Joi.number(),
});
