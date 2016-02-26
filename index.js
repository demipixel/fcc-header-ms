var app = require('express')();

var PORT = 3000;

app.listen(PORT, () => {
  console.log('And we\'re live!');
});

var HOME = 'Header microservice for FreeCodeCamp';

app.get('/', (req, res) => {
  try {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].match(/\((.*?)\)/)[1]
  });
  } catch (err) {
    res.json({});
  }
});