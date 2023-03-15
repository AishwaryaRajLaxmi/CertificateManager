const adminModel = require("../database/models/adminModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// createAdmin

module.exports.createAdmin = async (serviceData) => {
  try {
    //find,if existed
    const adminResponse = await adminModel.findOne({
      email: serviceData.email,
    });

    if (adminResponse) {
      throw new Error("User already exist");
    }

    const newData = new adminModel(serviceData);

    //encrypt the password
    const hashPassword = await bcrypt.hash(newData.password, 10);

    newData.password = hashPassword;
    const response = await newData.save();

    const formatResponse = response.toObject();
    return formatResponse;
  } catch (error) {
    console.log(
      `Something went wrong service : adminService : registerAdmin\nError: ${error.message}`
    );
    throw new Error(error.message);
  }
};

// loginAdmin
module.exports.loginAdmin = async (serviceData) => {
  try {
    const userResponse = await adminModel.findOne({ email: serviceData.email });

    if (!userResponse) {
      throw new Error("User does not exist");
    }

    // compare the password
    const isMatch = await bcrypt.compare(
      serviceData.password,
      userResponse.password
    );

    if (isMatch) {
      const token = jwt.sign(
        { adminId: userResponse._id },
        process.env.JWT_SECRET_KEY
      );

      return { jwtToken: token };
    } else {
      throw new Error("Password does not match");
    }
  } catch (error) {
    console.log(
      `Something went wrong : service :adminService :loginAdmin\nError:${error}`
    );
    throw new Error(error);
  }
};

// updateAdmin
module.exports.updateAdmin = async (aid, body) => {
  try {
    if (body.password) {
      const hashPassword = await bcrypt.hash(body.password, 10);
      body.password = hashPassword;
    }
    const response = await adminModel.findByIdAndUpdate(aid, body, {
      new: true,
    });
    return response.toObject();
  } catch (error) {
    console.log(
      `Something went wrong: services :updateService :updateAdmin\nError:${error.message}`
    );
    throw new Error(error.message);
  }
};

// deleteAdmin
module.exports.deleteAdmin = async (serviceData) => {
  try {
    const response = adminModel.findByIdAndDelete(serviceData, { new: true });
    return response;
  } catch (error) {
    console.log(`Something went wrong: service :adminService: deleteAdmin`);
    throw new Error(error.message);
  }
};
