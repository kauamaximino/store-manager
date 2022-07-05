const services = require('../services');

const listSales = async (request, response) => {
  const salesResult = await services.listSales();

  return response.status(200).json(salesResult);
};

module.exports = listSales;
