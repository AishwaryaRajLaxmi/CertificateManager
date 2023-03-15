//schema for admin
const mongoose = require("mongoose");
const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
    },
    mobile: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trime: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },

  {
    timestamps: true,
    toObject: {
      transform: (doc, ret) => {
        delete ret.__v;
        delete ret.password;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("admin", adminSchema);
