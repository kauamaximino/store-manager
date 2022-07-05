const connection = require('./connection');

const listSalesId = async (id) => {
  const [salesId] = await connection.execute(
    'SELECT date, product_id, quantity FROM StoreManager.sales AS SALES INNER JOIN'
      + ' StoreManager.sales_products AS SALES_PRODUCTS ON SALES_PRODUCTS.sale_id = SALES.id'
      + ' WHERE SALES.id = ? ORDER BY sale_id, product_id',
    [id],
  );

    return salesId.map((sale) => ({
      saleId: sale.sale_id,
      date: sale.date,
      productId: sale.product_id,
      quantity: sale.quantity,
    }));
};

module.exports = listSalesId;
