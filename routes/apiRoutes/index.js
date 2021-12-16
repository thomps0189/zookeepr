const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);
router.use("./zookeeperRoutes.js");

module.exports = router;