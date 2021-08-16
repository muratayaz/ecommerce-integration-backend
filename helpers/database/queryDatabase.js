const Shopify = require("../../models/Shopify");

const checkShopifyProductExist = async (data) => {
  data.products.map(async (item) => {
    const shopify = await Shopify.exists({ id: item.id });
    if (!shopify) {
    }
  });
};
