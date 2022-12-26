const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
require('dotenv').config();

const route = require('./routes/index.routes')

const port = process.env.PORT;
const app = express();

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(route);

app.get('*',(req, res, next) => {
    res.status(404)
    res.send('not found')
  })
app.listen(port, ()=>{
    console.log(`server is ballin at port ${port}`);
})