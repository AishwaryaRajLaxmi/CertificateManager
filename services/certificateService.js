const certiFicateModel = require("../database/models/certificateModel");

// createCertificate
module.exports.createCertificate = async (body) => {
  try {
    const serviceResponse = await certiFicateModel
      .findOne()
      .sort({ createdAt: -1 });

    if (serviceResponse == null) {
      body.serialNumber = 210;
      body.certificateNumber = "BR/" + body.session + "/00" + body.serialNumber;
    } else {
      body.serialNumber = serviceResponse.serialNumber + 1;
      let sNumber = body.serialNumber + "";

      if (sNumber.length === 3) {
        body.certificateNumber =
          "BR/" + body.session + "/00" + body.serialNumber;
      } else if (serialNumberLength === 4) {
        certificateNumber = "BR/" + body.session + "/0" + body.serialNumber;
      } else if (serialNumberLength === 5) {
        certificateNumber = "BR/" + body.session + "/" + body.serialNumber;
      }
    }
    // if (serviceResponse) {
    //   throw new Error("Certificate already exists");
    // }
    const newData = new certiFicateModel(body);
    const response = newData.save();
    return response;
  } catch (error) {
    console.log(
      `Something went wrong :Service :certificateService :createCertificate\nError:${error.message}`
    );
    throw new Error(error.message);
  }
};

// updateCertificate
module.exports.updateCertificate = async (id, body) => {
  try {
    const response = await certiFicateModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return response;
  } catch (error) {
    console.log(
      `Something went wrong :Service :certificateService :updateCertificate\nError:${error.message}`
    );
    throw new Error(error.message);
  }
};

// deleteCertificate
module.exports.deleteCertificate = async (id) => {
  try {
    const response = await certiFicateModel.findByIdAndDelete(id, {
      new: true,
    });
    return response;
  } catch (error) {
    console.log(
      `Something went wrong :Service :certificateService :deleteCertificate\nError:${error.message}`
    );
    throw new Error(error.message);
  }
};

// getAllCertificates
module.exports.getAllCertificates = async (serviceData) => {
  const { skip = 0, limit = 10 } = serviceData;
  try {
    const response = await certiFicateModel
      .find()
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    return response;
  } catch (error) {
    console.log(
      `Something went wrong :Service :certificateService :getAllCertificates\nError:${error.message}`
    );
    throw new Error(error.message);
  }
};

// getCertificatesByid
module.exports.getCertificateById = async (serviceData) => {
  try {
    const response = await certiFicateModel.findById(serviceData);
    return response;
  } catch (error) {
    console.log(
      `Something went wrong :Service :certificateService :getAllCertificateById\nError:${error.message}`
    );
    throw new Error(error.message);
  }
};

// findCertificate
module.exports.findCertificate = async (serviceData) => {
  console.log("serveicedaa", serviceData);
  try {
    const response = await certiFicateModel.findOne({
      $and: [
        { mobileNumber: serviceData.mobileNumber },
        { certificateNumber: serviceData.certificateNumber },
      ],
    });

    if (response != null) {
      return response;
    }
    throw new Error(`'Validation is Failed',Try Again`);
  } catch (error) {
    console.log(
      `Something went wrong :Service :certificateService :findCertificate\nError:${error.message}`
    );
    throw new Error(error.message);
  }
};
