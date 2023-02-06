const express = require('express');
const router = express.Router();
const controller = require('../controllers/hiveController')
const repository = require('../repository/hiveRepository')
const multer = require('multer')
const path = require('path')
const tempPath = path.resolve(process.cwd(), 'temp')

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('editHive', {hive: repository.getHive(req.query.id)});
});

const upload = multer({ dest: tempPath});

router.post('/update', controller.UpdateHive)
router.post('/delete', controller.DeleteHive)
router.post('/uploadFile', upload.single('myFile'), controller.UploadPicture)
router.post('/deleteFile', controller.DeletePicture)

module.exports = router;