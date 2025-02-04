const Tesseract = require('tesseract.js');

const verifyCertificate = async (file) => {
  const result = await Tesseract.recognize(file.data, 'eng');
  return result.data.text;
};

module.exports = { verifyCertificate };
