const services = require('../services');

const deleteProduct = async (request, response) => {
  try {
    const { id } = request.params;
    await services.deleteProduct(id);
    return response.status(204).end();
  } catch (error) {
    return response.status(404).json({ message: error.message });
  }
};

module.exports = deleteProduct;
