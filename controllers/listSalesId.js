const services = require('../services');

const listSalesId = async (request, response) => {
  try {
    const { id } = request.params;
    const salesId = await services.listSalesId(id);
    return response.status(200).json(salesId);
  } catch (error) {
    return response.status(404).json({ message: error.message });
  }
};

module.exports = listSalesId;
