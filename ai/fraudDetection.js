const openai = require('openai');
const client = new openai.OpenAI(process.env.OPENAI_API_KEY);

const detectFraud = async (text) => {
  const response = await client.complete({
    prompt: `Is this text fraudulent? ${text}`,
    max_tokens: 50,
  });
  return response.choices[0].text;
};

module.exports = { detectFraud };
