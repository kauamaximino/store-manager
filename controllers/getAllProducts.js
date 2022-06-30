const services = require('../services');

const getAllProducts = async (_request, response) => {
  try {
    const products = await services.getAllProducts();
    return response.status(200).json(products);
  } catch (error) {
    return response.status(404).json({ error: error.message });
  }
};

module.exports = getAllProducts;
