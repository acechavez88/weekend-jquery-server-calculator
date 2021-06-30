$(handleReady)

//recall last operator button
let operator = null;

function handleReady() {
  console.log("jquery is a GO!")

    //render data on load
    fetchCalculations();



// Get value on button click and show alert
$("#submitButton").on('click', doMath);
// listener for clear inputs on click c button
$("#clearButton").on('click', clearInputs);
$(".operatorBtn").on('click', onOperatorSelect);
}

//listener for operator button, function to take operator elements using HTML to get value..
function onOperatorSelect() {
  console.log('clicked operator', $(this).text());
  
  operator = $(this).text();
}

function getAnswerHistory() {
  //calls previous calculations..
  $.ajax({
    method: "POST",
    url: '/answerHistory',
    data: {
      firstNumber: $('#firstInput').val(),
      secondNumber: $('#secondInput').val(),
      operator: operator,
    }
    
  }) 
  .then(res => {
    console.log('POST res', res);

    fetchCalculations();

  })
  .catch(err => {
      console.log('Sorry something unexpected happened.', err);
  })
}

function fetchCalculations() {
  $.ajax({
    method: 'GET',
    url: '/calculations'
})
    .then(res => {
      console.log('GET', res);
    

    // render last calculation 
    let lastCalculation = res [res.length -1];
    $('#answer').text(lastCalculation.solution);

    //loop and render 'answer history'
    $('#lastCalculation').empty();
    for(let calc of res) {
      $('#history').append(`
          <li>
              ${calc.firstInput} ${calc.operator} ${calc.secondNumber} = ${calc.solution}
          <li>
          `)
    }
  })
  .catch(err => {
    console.log('GET error', err);
  })
}

// //update answer history section
// function showAnswerHistory(previousCalculations) {
//   $('#lastCalculation').append(previousCalculations[0])
// }

//create post route for calculation for two i
function doMath() {
  $.ajax({
    type: 'POST',
    url: '/Math',
    data: {
        valOne: answer.valueOne,
        valTwo: answer.valueTwo,
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

// clearing inputs with C button..
function clearInputs() {
  $('#firstInput').val('');
  $('#secondInput').val('');
}
