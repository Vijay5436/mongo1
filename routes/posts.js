const express = require ("express");
const router = express.Router();

const Controller = require('../controller/controller');

router.get('/',Controller.getAllPost);

router.post('/',Controller.storeAPost);

module.exports = router;