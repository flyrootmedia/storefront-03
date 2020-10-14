const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = app => {
  app.get('/api/plp', async (req, res) => {
    // TODO: continue with this query and building up the api.
    // Currently all I'm doing is testing filtering products by selected
    // refinement values
    let params = { ...req.query };
    let facetIds = params.facetIds;

    if (facetIds) {
      var facetIdsArray = facetIds.split(' ');
      console.log(facetIdsArray);
    }

    try {
      const products = await Product.find({
        facetIds: { $all: facetIdsArray }
      });
      res.send(products);
    } catch (e) {
      console.log(e);
    }
  });
};
