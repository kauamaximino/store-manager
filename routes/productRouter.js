const express = require('express');

const router = express.Router();
const controllers = require('../controllers');
const middlewares = require('../middlewares');

router.get('/products/:id', controllers.getProductById);

router.get('/products', controllers.getAllProducts);

router.post('/products', middlewares.validateName, controllers.insertProduct);

router.delete('/products/:id', controllers.deleteProduct);

module.exports = router;
