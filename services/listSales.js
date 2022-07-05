const models = require('../models');

const listSales = async () => {
  const salesResult = await models.listSales();
  console.log(salesResult);

  return salesResult;
};

module.exports = listSales;
