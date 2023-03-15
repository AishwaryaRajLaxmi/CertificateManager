const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/adminController");
const {
  createAdminSchema,
  loginAdminSchema,
  updateAdminSchema,
} = require("../joiValidationSchema/adminValidationSchema");
const joiSchemaValidation = require("../middlesware/joiSchemaValidation");
// const { updateAdmin } = require("../services/adminService");
const { validateAdminToken } = require("../middlesware/jwtAdminValidation");

// registerAdmin
adminRouter.post(
  "/register",
  joiSchemaValidation.validate(createAdminSchema),
  adminController.createAdmin
);

// loginAdmin
adminRouter.post(
  "/login",
  joiSchemaValidation.validate(loginAdminSchema),
  adminController.loginAdmin
);

// updateAdmin
adminRouter.put(
  "/",
  validateAdminToken,
  joiSchemaValidation.validate(updateAdminSchema, "body"),
  adminController.updateAdmin
);

// deleteAdmin
adminRouter.delete("/", validateAdminToken, adminController.deleteAdmin);

module.exports = adminRouter;
