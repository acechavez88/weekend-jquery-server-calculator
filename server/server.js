const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//serve up static files(HTML, CSS, Client JS)
app.use(express.static('server/public'));

// global scope for access
let bananas = [];

// GET & POST routes go here
// attempting to create POST route for math equation
app.post('/answerHistory', (req, res) => {
    console.log('body', req.body);

    //do math calculation 
    let operator = req.body.operator;
    if (operator === '+') {
        solution = Number(req.body.firstNumber) + Number(req.body.secondNumber);
    }
    //using switch statement for operators
    // switch(operator) {
    //     case '+':
    //         result = Number(number) + Number(number2);
    //         break;
    //     case '-':
    //         result = Number(number) - Number(number2);
    //         break;
    //     case '*':
    //         result = Number(number) * Number(number2);
    //         break;
    //     case '/':
    //         result = Number(number) / Number(numberTwo);
    //         break;
    //         }

    //changing switch to if else
    else if (operator === '-') {
        solution = Number(req.body.firstNumber) - Number(req.body.secondNumber);
    }
    else if (operator === '*') {
        solution = Number(req.body.firstNumber) * Number(req.body.secondNumber);
    }
    else if (operator === '/') {
        solution = Number(req.body.firstNumber) / Number(req.body.secondNumber);
    }
    else {
        res.status (400).send(`Invalid operator: ${req.body.operator}`);
        return;
    }
    console.log('solution', solution);

    bananas.push({
        firstInput: Number(req.body.firstNumber),
        secondInput: Number(req.body.secondNumber),
        operator: operator,
        solution: solution
    });
    
    res.sendStatus(201);  
 
});

    app.get('/calculations', (req,res) => {
        console.log(bananas);
        res.send(bananas);
    })

    app.listen(5000, () => {
        console.log('Listening on http://localhost:5000');
    });

    // //creating an object of input for GET
    // let calculationObj = {
    //     number: number,
    //     number2: numberTwo,
    //     operator: operator, 
    //     answer: answer,
    // }

    //store object to answerHistoryArray
//         answerHistoryArray.push(calculationObj);
//         res.send(calculationObj);

// });

// let answerHistoryArray = [];

// app.listen(PORT, () => {
//     console.log('Server is running on port', PORT);
// });

// // create variable for previous answers and history
// app.get('/answerHistory', (req, res) => {
//     res.send(answerHistoryArray);
// })
