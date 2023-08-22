const multer = require('multer');

const multerInput = {
  uploadDetail: multer({
    storage: multer.diskStorage({
      destination(req, file, done) {
        done(null, 'uploads/');
      },

      filename(req, file, done) {
        const ext = path.extname(file.originalname);
        done(null, path.basename(req.body.id + ext)) + Date.now() + ext;
      },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
  }),
};
