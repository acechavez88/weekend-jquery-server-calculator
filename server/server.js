const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//serve up static files(HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST routes go here
// does math calculation function go here?

let answerHistoryArray = [];

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

// create variable for previous answers and history
app.get('/answerHistory', (req, res) => {
    let previousCalculationHistory = answerHistoryArray;
})
// creating an object of input for GET
let calculationObj: {
    number: number,
    number2: numberTwo,
    operator: operator, 
    answer: answer,
}

//store object to answerHistoryArray
answerHistoryArray.push(calculationObj);
res.send(calculationObj);