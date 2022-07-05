const connection = require('./connection');

const insertProduct = async (name) => {
  const [product] = await connection.query(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  const newProduct = { id: product.insertId, name };
  return newProduct;
};

module.exports = insertProduct;
