const express = require('express');

const router = express.Router();
const controllers = require('../controllers');

router.get('/sales/:id', controllers.listSalesId);

router.get('/sales', controllers.listSales);

module.exports = router;
