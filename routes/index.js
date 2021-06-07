// module.exports = app => {
//   const menuController = require('../controller/menuController');
//   const router = require('express').Router();

//   router.get("/", menuController.findAll);

//   app.use('/api/beer', router);
// }
const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
