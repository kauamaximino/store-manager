const models = require('../models');

const getAllProducts = async () => {
  const products = await models.getAllProducts();

  if (products.length === 0) throw new Error('No products found');
  
  return products;
};

module.exports = getAllProducts;
