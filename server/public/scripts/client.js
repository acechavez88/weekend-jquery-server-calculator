$(handleReady)

function handleReady() {
  console.log("jquery is a GO!")

// Get value on button click and show alert
$("#submitButton").on('click', doMath);
// listener for clear inputs on click c button
$("#clearButton").on('click', clearInputs);
$(".operatorBtn").on('click', onOperatorSelect);
}

//listener for operator button, function to take operator elements using HTML to get value..
$('.operatorButton').on('click', function() {
  operator = $(this).html();
});

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

//create post route for calculation for two i
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
    let operator = operator.$(this)
    let calculationObj = {
      number: number,
      number2: numberTwo,
      operator: operator
    }
//if any filed is empty alert
if(firstNumber === '' || secondNumber === '' || operator === '') {
  alert('please complete fields');
}
}

// clearing inputs with C button..
function clearInputs() {
  $('#firstInput').val('');
  $('#secondInput').val('');
}
