import express from "express";
const router = express.Router();
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = `${file.fieldname}-${Date.now()}${path.extname(
      file.originalname
    )}`;

    cb(null, name);
  },
});

function fileFilter(req, file, cb) {
  const fileType = /jpg|jpeg|png/;
  const extname = fileType.test(path.extname(file.originalname));
  const mimetype = fileType.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error("Image Only"));
  }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/", upload.single("image"), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
