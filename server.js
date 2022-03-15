
const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const {PORT} = require('./config');
const bodyParser = require('body-parser');

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
// console.log(PORT);

app.get('/', (req, res)=>{
    res.send(`Hello World is listening at port ${PORT}`);
})
app.get('/data', (req, res)=>{
    res.send(`Hello World data route is listening at port ${PORT}`);
})

app.listen(PORT, ()=> console.log(`App listening at port ${PORT}`));