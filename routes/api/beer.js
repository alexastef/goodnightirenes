const router = require('express').Router();
const menuController = require('../../controller/menuController');

router.route("/")
  .get(menuController.findAll);

module.exports = router;