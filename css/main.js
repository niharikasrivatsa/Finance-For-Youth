

const form = document.getElementById("myForm");
const question = document.querySelector("#answer");
console.log(document.querySelector('h1'));

console.log(form);
form.addEventListener('submit',onSubmit);

function onSubmit(e){
  e.preventDefault;
  if(question.value == 'C'){
    document.getElementById('right').style.display='block'
  }
  else{
    document.getElementById('wrong').style.display='block'
  }
}
