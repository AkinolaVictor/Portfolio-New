const express = require('express');
const serverStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enforce = require('express-sslify');

const app = express();
// const port = process.env.PORT || 5000

app.use(enforce.HTTPS({trustProtoHeader: true}));
app.use(serverStatic(__dirname + '/dist'));
app.use(history());

app.listen(process.env.PORT || 5000);