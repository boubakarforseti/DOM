// function less
var lessbuttons = document.getElementsByClassName("Less");
console.log(lessbuttons);

for (const button of lessbuttons) {
    console.log(button);
    button.addEventListener('click', () =>{
        var nextElementValue = button.nextElementSibling.value

        var intVal = parseInt(nextElementValue)
        console.log(intVal);

        if (intVal>0) {
            var newVal= intVal-1 ;
            console.log(newVal);
    
            button.nextElementSibling.value= newVal;
        }
    })
}


//function plus
var plusbuttons = document.getElementsByClassName("Plus");
console.log(plusbuttons);

for (const button of plusbuttons) {
    console.log(button);
    button.addEventListener('click', () =>{
        var previousElementValue = button.previousElementSibling.value

        var intVal = parseInt(previousElementValue)
        console.log(intVal);

        var newVal=intVal + 1 ;
        button.previousElementSibling.value= newVal;
        
    })
     
}

// car price
var total = document.getElementsByClassName("total");


var totalval= newVal*11500000;
console.log(total);


// Remove element
var selectorByClassName=document.querySelector('White-Card-BMW')
var parent =document.getElementByClassName ('White-Card-BMW')

  var buttonRemove = document.getElementByClassName('Remove')

  buttonRemove.addEventListener ("Click", Remove)
  function Remove (){
        selectorByClassName.parentElement.remove
  }