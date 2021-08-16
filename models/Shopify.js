const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShopifySchema = new Schema({
  id: {
    type: String,
    required: [true, "Lütfen satıcı giriniz."],
  },
  title: {
    type: String,
    required: [true, "Lütfen başlık giriniz."],
  },
  vendor: {
    type: String,
    required: [true, "Lütfen satıcı giriniz."],
  },
  slug: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

// Pre Save Method
ShopifySchema.pre("save", function (next) {
  if (!this.isModified("title")) next();

  this.slug = this.makeSlug();
  next();
});
ShopifySchema.methods.makeSlug = function () {
  return slugify(this.title, {
    replacement: "-",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
};
module.exports = mongoose.model("Shopify", ShopifySchema);
