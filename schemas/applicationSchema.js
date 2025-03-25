const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  country_image: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  visa_type: {
    type: String,
    required: true,
  },
  processing_time: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  validity: {
    type: String,
    required: true,
  },
  application_method: {
    type: String,
    required: true,
  },
  applicant_email: {
    type: String,
    required: true,
  },
  applied_data: {
    type: Date,
    default: new Date(),
  },
});

module.exports = applicationSchema;
