$(handleReady)

function handleReady() {
  console.log("jquery is a GO!")

// Get value on button click and show alert
$(".operatorBtn").on('click', () =>{
});
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

function doMath(val1, val2) {
  
}