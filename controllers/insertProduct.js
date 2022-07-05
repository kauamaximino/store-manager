const services = require('../services');

const insertProduct = async (request, response) => {
  const { name } = request.body;
  const product = await services.insertProduct(name);
  return response.status(201).json(product);
};

module.exports = insertProduct;
