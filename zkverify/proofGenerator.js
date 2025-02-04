const zkVerify = require('zkverify-sdk');

const generateProof = async (data) => {
  const proof = await zkVerify.generateProof(data);
  return proof;
};

module.exports = { generateProof };
