const app = require('./app');
require('dotenv').config();

const productRouter = require('./routes/productRouter');
const salesRouter = require('./routes/salesRouter');

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.use(productRouter);
app.use(salesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
