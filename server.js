const express = require('express');
const app = express();

app.use(express.static('src'));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.render(__dirname + '/index.html');
});

app.listen(process.env.PORT || process.env.port || 5500, () => console.log('Iniciado! ' + process.env.PORT || process.env.port || 5500));