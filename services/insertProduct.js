const models = require('../models');

const insertProduct = async (name) => {
  const product = await models.insertProduct(name);
  return product;
};

module.exports = insertProduct;
