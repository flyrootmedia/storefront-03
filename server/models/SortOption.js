const mongoose = require('mongoose');
const { Schema } = mongoose;

const sortOptionSchema = new Schema({
  selected: { type: Boolean, default: false },
  optionKey: String,
  value: String,
  display: String
});

mongoose.model('sortOptions', sortOptionSchema);
