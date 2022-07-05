const connection = require('./connection');

const deleteProduct = async (id) => {
  const [product] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );

  return product;
};

module.exports = deleteProduct;
