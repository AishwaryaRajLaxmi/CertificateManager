const jwt = require("jsonwebtoken");

module.exports.validateAdminToken = (req, res, next) => {
  const authorization = req?.headers?.authorization;

  if (!authorization) {
    res.send({ message: "Token is missing" });
  }

  // check jwt token(here we trim the token string that means we trim the 'Bearer' which we passed in the header)

  const tokenString = authorization.substring(7);

  try {
    //user will get the whole object(payload)
    const admin = jwt.verify(tokenString, process.env.JWT_SECRET_KEY);
    req.params.adminId = admin.adminId;
    console.log("ad", req.params.adminId);

    next();
  } catch (err) {
    res.send({ message: "Invalid token", error: err.message });
  }
};
