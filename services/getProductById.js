const models = require('../models');

const getProductById = async (id) => {
  const product = await models.getProductById(id);
  console.log(product);

  if (!product || product.length === 0) throw new Error();

  return product;
};

module.exports = getProductById;
