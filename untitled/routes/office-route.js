const controller = require('../offices/office-controller');
var express = require('express');
var router = express.Router();

router.post('/', controller.createOffice)

module.exports = router;