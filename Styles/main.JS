// fonction button less
var lessbuttons = document.getElementsByClassName("Less");
console.log(lessbuttons);

for (const button of lessbuttons) {
    console.log(button);
    button.addEventListener('click', () =>{
        var nextElementValue = button.nextElementSibling.value

        var intVal = parseInt(nextElementValue)
        console.log(intVal);

        if (intVal>0) {
            var newVal= intVal-1;
            console.log(newVal);
    
            button.nextElementSibling.value= newVal;
        }
    })
}
// Fonction du button plus
var plusbuttons = document.getElementsByClassName("Plus");
console.log(plusbuttons);

for (const button of plusbuttons) {
    console.log(button);
    button.addEventListener('click', () =>{
        var nextElementValue = button.previousElementSibling.value

        var intVal = parseInt(previousElementSibling)
        console.log(intVal);

        
        button.previousElementSibling.value= newVal;
    })
}




