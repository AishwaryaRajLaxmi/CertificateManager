const adminService = require("../services/adminService");
const constants = require("../helpers/constants");
const { response } = require("express");

// createAdmin
module.exports.createAdmin = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  // console.log("b", req.body);
  try {
    const serviceResponse = await adminService.createAdmin(req.body);
    response.body = serviceResponse;
    response.status = 200;
    response.message = constants.adminMessage.ADMIN_REGISTERED;
  } catch (error) {
    console.log(
      `Something went wrong controller : adminController :createAdmin \nError: ${error.message}`
    );

    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// loginAdmin
module.exports.loginAdmin = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await adminService.loginAdmin(req.body);
    response.body = serviceResponse;
    response.message = constants.adminMessage.ADMIN_LOGEDIN;
  } catch (error) {
    console.log(
      `Something went wrong : controller : adminController :loginAdmin`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// updateAdmin
module.exports.updateAdmin = async (req, res) => {
  const response = { ...constants.defaultServerResponse };

  try {
    const serviceResponse = await adminService.updateAdmin(
      req.params.adminId,
      req.body
    );
    response.body = serviceResponse;
    response.status = 200;
    response.message = constants.adminMessage.ADMIN_UPDATED;
  } catch (error) {
    console.log(
      `Something went wrong : controller :adminController : update : updateAdmin`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// deleteAdmin
module.exports.deleteAdmin = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await adminService.deleteAdmin(req.params.adminId);
    response.body = serviceResponse;
    response.status = 200;
    response.message = constants.adminMessage.ADMIN_DELETED;
  } catch (error) {
    console.log(`
    Something went wrong: controller :adminController :delete :deleteAdmin`);
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};
