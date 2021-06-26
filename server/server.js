const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//serve up static files(HTML, CSS, Client JS)
app.use(express.static('server/public'));


// creating an object of input for GET
packet: {
    number:"",
    number2:"",
    operator:"", 
    answer:","
}