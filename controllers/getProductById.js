const services = require('../services');

const getProductById = async (request, response) => {
  try {
    const { id } = request.params;
    const productId = await services.getProductById(id);
    return response.status(200).json(productId[0]);
  } catch (error) {
    return response.status(404).json({ message: 'Product not found' });
  }
};

module.exports = getProductById;
