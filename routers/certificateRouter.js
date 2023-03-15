const express = require("express");
const certificateRouter = express.Router();
const {
  defineCertificateSchema,
  getAllCertificatesSchema,
} = require("../joiValidationSchema/certificateValidationSchema");
const { validateAdminToken } = require("../middlesware/jwtAdminValidation");
const certificateController = require("../controllers/certificateController");
const joiSchemaValidation = require("../middlesware/joiSchemaValidation");

// createCertificate
certificateRouter.post(
  "/",
  validateAdminToken,
  joiSchemaValidation.validate(defineCertificateSchema, "body"),
  certificateController.createCertificate
);

// findCertificate
certificateRouter.get(
  "/findCertificate",
  certificateController.findCertificate
);

// getAllCertificate
certificateRouter.get(
  "/",
  validateAdminToken,
  joiSchemaValidation.validate(getAllCertificatesSchema, "query"),
  certificateController.getAllCertificates
);

// updateCertificate
certificateRouter.put(
  "/:id",
  validateAdminToken,
  joiSchemaValidation.validate(defineCertificateSchema, "body"),
  certificateController.updateCertificate
);

// deleteCertificate
certificateRouter.delete(
  "/:id",
  validateAdminToken,
  certificateController.deleteCertificate
);

//  getCertificateById
certificateRouter.get(
  "/:id",
  validateAdminToken,
  certificateController.getCertificateById
);
module.exports = certificateRouter;
