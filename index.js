const app = require('./app');
require('dotenv').config();

const controllers = require('./controllers');
const middlewares = require('./middlewares');

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.get('/products/:id', controllers.getProductById);

app.get('/products', controllers.getAllProducts);

app.post('/products', middlewares.validateName, controllers.insertProduct);

app.get('/sales/:id', controllers.listSalesId);

app.get('/sales', controllers.listSales);

app.delete('/products/:id', controllers.deleteProduct);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
