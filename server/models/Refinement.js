const mongoose = require('mongoose');
const { Schema } = mongoose;

const refinementSchema = new Schema({
  id: String,
  label: String,
  count: Number,
  isEnabled: { type: Boolean, default: true },
  isSelected: { type: Boolean, default: false }
});

module.exports = refinementSchema;
