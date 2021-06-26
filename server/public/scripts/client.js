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
}