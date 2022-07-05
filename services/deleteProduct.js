const models = require('../models');

const deleteProduct = async (id) => {
  const byID = await models.getProductById(id);

  if (byID.length === 0) throw new Error('Product not found');

  const product = await models.deleteProduct(id);

  return product;
};

module.exports = deleteProduct;
