const models = require('../models');

const listSales = async () => {
  const salesResult = await models.listSales();

  return salesResult;
};

module.exports = listSales;
