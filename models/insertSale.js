const connection = require('./connection');

const insertSale = async (sales) => {
  const [sale] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) values(now())',
  );

  await sales.map((element) => connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) values(?, ?, ?)',
    [element.insertId, element.productId, element.quantity],
  ));

  const newSale = { id: sale.insertId, itemSold: sales };
  return newSale;
};

module.exports = insertSale;
