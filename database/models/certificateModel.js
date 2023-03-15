const mongoose = require("mongoose");
const certificateSchema = mongoose.Schema(
  {
    serialNumber: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    session: {
      type: String,
      required: true,
    },
    certificateNumber: {
      type: String,
      required: true,
      unique: true,
    },
    certificateName: {
      type: String,
      required: true,
    },
    instituteName: {
      type: String,
      required: true,
    },
    batchStartDate: {
      type: Date,
      required: true,
    },
    batchEndDate: {
      type: Date,
      required: true,
    },
    dateOfIssue: {
      type: Date,
      required: true,
    },
    refPerson: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("certificate", certificateSchema);
