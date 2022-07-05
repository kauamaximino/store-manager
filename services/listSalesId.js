const models = require('../models');

const listSalesId = async (id) => {
  const salesId = await models.listSalesId(id);
  
  if (salesId.length === 0) throw new Error('Sale not found');

  return salesId;
};

module.exports = listSalesId;
