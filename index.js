const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'I love you lola'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
