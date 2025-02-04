const express = require('express');
const router = express.Router();
const { verifyCertificate } = require('../../ai/ocr');

router.post('/', async (req, res) => {
  const file = req.files.file;
  const text = await verifyCertificate(file);
  res.json({ message: `Verified: ${text}` });
});

module.exports = router;
