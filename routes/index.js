module.exports = app => {
  const menuController = require('../controller/menuController');
  const router = require('express').Router();

  router.get("/", menuController.findAll);

  app.use('/api/beer', router);
}
