const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  facetIds: [String],
  productURL: String,
  defaultSkuURL: String,
  sticker: {
    cssClass: String,
    stickerText: String
  },
  name: String,
  image: {
    url: String,
    altText: String
  },
  styles: [
    {
      selected: { type: Boolean, default: false },
      linkURL: String,
      imageURL: String,
      altText: String
    }
  ],
  ratings: {
    rating: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },
  price: {
    lowPrice: Number,
    highPrice: Number,
    salePrice: String,
    wasPrice: String
  },
  isFeatured: { type: Boolean, default: false },
  isBestSeller: { type: Boolean, default: false },
  isNewArrival: { type: Boolean, default: false }
});

mongoose.model('products', productSchema);
