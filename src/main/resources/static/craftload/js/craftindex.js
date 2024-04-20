let confirmation_of_shipment = document.querySelectorAll('.messageTop, .messageButtom')
let calculateButtom = document.querySelectorAll(".calculateCostButtom");


calculateButtom[0].addEventListener("click", ()=>{
    confirmation_of_shipment[0].innerHTML = "Повідомлення відправлено!!!"
    setTimeout(()=>{
        confirmation_of_shipment[0].innerHTML = " "
    }, 2000)
})

calculateButtom[1].addEventListener("click", ()=>{
    confirmation_of_shipment[1].innerHTML = "Повідомлення відправлено!!!"
    setTimeout(()=>{
        confirmation_of_shipment[1].innerHTML = " "
    }, 2000)
})


let butForm = document.querySelectorAll(".calculateCostButtom")
for(let i = 0; i < butForm.length; i++) {
    butForm[i].setAttribute('disabled', true);
    butForm[i].style.background = "grey";
}
let numberPhone = document.querySelectorAll('.numberPhone');

for(let i = 0; i < numberPhone.length; i++){
    numberPhone[i].oninput = function(){
        if(numberPhone[0].value.length !== 0 && numberPhone[1].value.length !== 0 &&
            numberPhone[2].value.length !== 0 && numberPhone[3].value.length !== 0 &&
            numberPhone[4].value.length !== 0 && numberPhone[5].value.length !== 0){
            butForm[0].removeAttribute('disabled');
            butForm[0].style.background = 'darkcyan';
        } else {
            butForm[0].setAttribute('disabled', true);
        }

        if(numberPhone[6].value.length !== 0 && numberPhone[7].value.length !== 0 &&
            numberPhone[8].value.length !== 0 && numberPhone[9].value.length !== 0 &&
            numberPhone[10].value.length !== 0 && numberPhone[11].value.length !== 0){
            butForm[1].removeAttribute('disabled');
            butForm[1].style.background = 'darkcyan';
        } else {
            butForm[1].setAttribute('disabled', true);
        }
    }
}
