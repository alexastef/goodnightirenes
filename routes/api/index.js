const router = require('express').Router();
const beerRoutes = require('./beer');

router.use("/beers", beerRoutes);

module.exports = router;