const mongoose = require("mongoose");

const visaSchema = mongoose.Schema({
  country_image: {
    type: String,
    required: true,
  },
  country_name: {
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
  required_documents: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  age_restriction: {
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
  user_email: String,
});

module.exports = visaSchema;
