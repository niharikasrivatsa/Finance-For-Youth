function getResults() {

  //CORRECT ANSWERS
  var amountCorrect = 0;

// LOOP FOR GOING THROUGH ALL QUESTIONS
  for(var i = 1; i <= 3; i++) {
    var radiosName = document.getElementsByName('answer'+i);

//LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
    for(var j = 0; j < 4; j++) {
      var radiosValue = radiosName[j];
      if(radiosValue.value == "correct" && radiosValue.checked) {
        amountCorrect++;
      }
    }
  }
  
document.getElementById('results').innerHTML =
"Score:" + amountCorrect;

}