const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'public/uploads');
    },

    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname));
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get('/', function (req, res) {
  res.render('index');
});

router.post('/uploads', uploadDetail.single('userFile'), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  res.send(req.body);
});

router.post(
  '/uploads/array',
  uploadDetail.array('userFiles'),
  function (req, res) {
    console.log(req.files);
    console.log(req.body);
    res.send(req.body);
  }
);

router.post(
  '/uploads/fields',
  uploadDetail.fields([{ name: 'userFiles1' }, { name: 'userFiles2' }]),
  function (req, res) {
    console.log(req.body);
    console.log(req.files);
    res.send(req.body);
  }
);

router.post(
  '/dynamicFile',
  uploadDetail.single('dynamicFile'),
  function (req, res) {
    console.log(req.body);
    console.log(req.file);
    res.send(req.file);
  }
);

module.exports = router;
