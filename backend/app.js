const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const verifyRouter = require('./routes/verify');
const issueRouter = require('./routes/issue');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/verify', verifyRouter);
app.use('/issue', issueRouter);

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});
