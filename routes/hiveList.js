const express = require('express');
const router = express.Router();
const controller = require('../controllers/hiveController')
const repository = require('../repository/hiveRepository')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('hiveList', {hives: repository.getHives()});
});

router.post('/new', controller.CreateHive);

module.exports = router;