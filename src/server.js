const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect("mongodb+srv://admin:dcam232353@omnistack-82zr4.mongodb.net/Omnistack?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);
app.listen(3333);