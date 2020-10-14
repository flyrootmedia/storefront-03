const mongoose = require('mongoose');
const { Schema } = mongoose;
const RefinementSchema = require('./Refinement');

const facetSchema = new Schema({
  facetId: String,
  label: String,
  isOpen: { type: Boolean, default: false },
  isFilterable: { type: Boolean, default: false },
  filterLabelText: String,
  seeAll: String,
  refinements: [RefinementSchema]
});

mongoose.model('facets', facetSchema);
