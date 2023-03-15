const certificateService = require("../services/certificateService");
const constants = require("../helpers/constants");

// createCertificate

module.exports.createCertificate = async (req, res) => {
  const response = {
    ...constants.defaultServerResponse,
  };
  try {
    const serviceResponse = await certificateService.createCertificate(
      req.body
    );

    response.body = serviceResponse;
    response.status = 200;
    response.message = constants.certificateMessage.CERTIFICATE_CREATED;
  } catch (error) {
    console.log(
      `Something went wrong : controller : certificateController : createCertificate`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// updateCertificate
module.exports.updateCertificate = async (req, res) => {
  const response = {
    ...constants.defaultServerResponse,
  };
  try {
    const serviceResponse = await certificateService.updateCertificate(
      req.params.id,
      req.body
    );
    response.body = serviceResponse;
    response.status = 200;
    response.message = constants.certificateMessage.CERTIFICATE_UPDATED;
  } catch (error) {
    console.log(
      `Something went wrong controller :certificateController :updateCertificate`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// deleteCertificate
module.exports.deleteCertificate = async (req, res) => {
  const response = { ...constants.defaultServerResponse };

  try {
    const serviceResponse = await certificateService.deleteCertificate(
      req.params.id
    );
    response.body = serviceResponse;
    response.message = constants.certificateMessage.CERTIFICATE_DELETED;
    response.status = 200;
  } catch (error) {
    console.log(
      `Something went wrong : controller : certificateController : deleteCertificate\n Error:${error.message}`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// getAllCertificates
module.exports.getAllCertificates = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await certificateService.getAllCertificates(
      req.query
    );
    response.body = serviceResponse;
    response.message = constants.certificateMessage.CERTIFICATE_FETCHED;
    response.status = 200;
  } catch (error) {
    console.log(
      `Something went wrong : controller : certificateController : getCertificates\n Error:${error.message}`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// getCertificateById
module.exports.getCertificateById = async (req, res) => {
  const response = { ...constants.defaultServerResponse };
  try {
    const serviceResponse = await certificateService.getCertificateById(
      req.params.id
    );
    response.body = serviceResponse;
    response.message = constants.certificateMessage.CERTIFICATE_FETCHED;
    response.status = 200;
  } catch (error) {
    console.log(
      `Something went wrong : controller : certificateController : getCertificateById\n Error:${error.message}`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};

// findCertificate
module.exports.findCertificate = async (req, res) => {
  const response = { ...constants.defaultServerResponse };

  try {
    const serviceResponse = await certificateService.findCertificate(req.query);
    response.body = serviceResponse;
    response.message = constants.certificateMessage.CERTIFICATE_FETCHED;
    response.status = 200;
  } catch (error) {
    console.log(
      `Something went wrong : controller : certificateController : findCertificate\n Error:${error.message}`
    );
    response.message = error.message;
    response.error = error;
  }
  res.status(response.status).send(response);
};
