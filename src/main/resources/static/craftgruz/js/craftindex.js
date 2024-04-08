let but = document.querySelector(".submit");
but.setAttribute('disabled', true);
but.style.background = 'grey';
let input = document.querySelectorAll('.input, textarea');


for(let i = 0; i < input.length; i++){
    input[i].oninput = function(){
        console.log("hello")
        if(input[0].value.length !== 0 && input[1].value.length !== 0 && input[2].value.length !== 0 && input[3].value.length !== 0){
            but.removeAttribute('disabled');
            but.style.background = 'darkcyan';
            console.log("true")
        } else {
            but.style.background = 'grey';
            but.setAttribute('disabled', true);
        }
    }
}




let butForm = document.querySelectorAll(".calculateCostButtom")
for(let i = 0; i < butForm.length; i++) {
    butForm[i].setAttribute('disabled', true);
}
let numberPhone = document.querySelectorAll('.numberPhone');

for(let i = 0; i < numberPhone.length; i++){
    numberPhone[i].oninput = function(){
        if(numberPhone[0].value.length !== 0 && numberPhone[1].value.length !== 0 &&
            numberPhone[2].value.length !== 0 && numberPhone[3].value.length !== 0 &&
            numberPhone[4].value.length !== 0){
            butForm[0].removeAttribute('disabled');
            butForm[0].style.background = 'darkcyan';
            console.log("true")
        } else {
            butForm[0].setAttribute('disabled', true);
        }

        if(numberPhone[5].value.length !== 0 && numberPhone[6].value.length !== 0 &&
            numberPhone[7].value.length !== 0 && numberPhone[8].value.length !== 0 &&
            numberPhone[9].value.length !== 0){
            butForm[1].removeAttribute('disabled');
            butForm[1].style.background = 'darkcyan';
            console.log("true")
        } else {
            butForm[1].setAttribute('disabled', true);
        }
    }
}
