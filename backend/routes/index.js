var express = require('express');
var router = express.Router();
var multer = require('multer');

const fs = require('fs');
const { promisify } = require('util');
const app = require('../app');
const pipeline = promisify(require("stream").pipeline)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'public/data')
  },
  filename: (req,file,cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({storage}).single('file');

router.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if(err) {
      return res.status(500).json(err);
    }

    return res.status(200).send(req.file);
  })
});

module.exports = router;
