const express = require('express');
const router = express.Router();
const controller = require('../controllers/hiveController')
const repository = require('../repository/hiveRepository')


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('editHive', {hive: repository.getHive(req.query.id)});
});

router.post('/update', controller.UpdateHive)
router.post('/delete', controller.DeleteHive)

module.exports = router;