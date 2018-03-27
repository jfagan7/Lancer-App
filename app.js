const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.render('index');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});