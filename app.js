require('dotenv').config({ path: './config.env' });
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on port ' + port);
});

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      msg: 'Hello, world!',
    },
  });
});
