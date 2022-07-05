const connection = require('./connection');

const listSales = async () => {
  const [result] = await connection.execute(
    'SELECT sale_id, date, product_id, quantity FROM StoreManager.sales AS SALES'
      + ' INNER JOIN StoreManager.sales_products AS SALES_PRODUCTS ON'
      + ' SALES_PRODUCTS.sale_id = SALES.id ORDER BY sale_id ASC, product_id ASC',
  );

  return result.map((row) => ({
    saleId: row.sale_id,
    date: row.date,
    productId: row.product_id,
    quantity: row.quantity,
  }));
};

module.exports = listSales;
