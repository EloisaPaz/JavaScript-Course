const express = require('express');
const CalcService = require('./service/CalcService');
const routes = express.Router();

routes.get('/calculator/sum/:firstNum/:secondNum', CalcService.sum);
routes.get('/calculator/sub/:firstNum/:secondNum', CalcService.sub);
routes.get('/calculator/mul/:firstNum/:secondNum', CalcService.mul);
routes.get('/calculator/div/:firstNum/:secondNum', CalcService.div);

module.exports = routes;