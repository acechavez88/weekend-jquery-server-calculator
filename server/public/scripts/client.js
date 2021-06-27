$(handleReady)

function handleReady() {
  console.log("jquery is a GO!")

// Get value on button click and show alert
$(".operatorButton").on('click', () =>{
});
// listener for clear inputs on click c button
$("#clearButton").on('click', clearInputs);{
  }
}

function getAnswerHistory() {
  //calls previous calculations..
  $.ajax({
    type: "GET",
    url: '/answerHistory'
  }) 
  .then(function (response) {
      showHistory(response);
  })
  .catch(function (response) {
      console.log('Sorry something unexpected happened.', response);
  })
}

//update answer history section
function showAnswerHistory(previousCalculations) {
  $('#lastCalculation').append(previousCalculations[0])
}

function doMath(valOne, valTwo) {
  $.ajax({
    type: 'POST',
    url: '/Math',
    data: {
        valOne: answers.valueOne,
        valTwo: answers.valueTwo,
    },
    dataType: 'json'
  })
  .then(function (response) {
    getAnswerHistory(response);
  })
  .catch(function (response) {
    console.log('Sorry something unexpected happened.', response);
  });
}

let answers = {};
function submitAnswer() {
    let firstNumber = $('#firstInput').val();
    let secondNumber = $('#secondInput').val();
    let calculationObj = {
      number: number,
      number2: numberTwo,
      operator: operator
    }
  }
  
function clearInputs() {
  $('#firstInput').val('');
  $('#secondInput').val('');
}

