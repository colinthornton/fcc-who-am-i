const express = require('express');
const app = express();

const getLang = (headers) => {
  const lang = headers['accept-language'];
  return lang.match(/[^,;]+/g)[0];
}

const getOS = (headers) => {
  const userAgent = headers['user-agent'];
  return userAgent.match(/[^()]+/g)[1];
}

app.get('/', (req, res) => {
  const json = {
    ipAddress: null,
    language: getLang(req.headers),
    operatingSytem: getOS(req.headers),
  }
  res.json(json);
});

app.listen(8080, () => console.log('Server open on 8080'));
