const express = require('express');
const router = express.Router();
const controller = require('../controllers/hiveController')
const repository = require('../repository/hiveRepository')

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.filter)
        res.render('hiveList', {hives: repository.filterHives(req.query.filter),
            flt: req.query.filter});
    else
        res.render('hiveList', {hives: repository.getHives(), flt: undefined});
});

router.post('/new', controller.CreateHive);

module.exports = router;