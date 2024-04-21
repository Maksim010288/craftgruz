let confirmation_of_shipment = document.querySelectorAll('.messageTop, .messageButtom')
let calculateButtom = document.querySelectorAll(".calculateCostButtom");
let numberPhone = document.querySelectorAll('.numberPhone');

for (let i = 0; i < calculateButtom.length; i++) {
    calculateButtom[i].setAttribute('disabled', true);
    calculateButtom[i].style.background = "grey";
}

for (let i = 0; i < numberPhone.length; i++) {
    numberPhone[i].oninput = function () {
        if (numberPhone[0].value.length !== 0 &&
            numberPhone[1].value.length !== 0 &&
            numberPhone[2].value.length !== 0 &&
            numberPhone[3].value.length !== 0 &&
            numberPhone[4].value.length !== 0 &&
            numberPhone[5].value.length !== 0) {
            calculateButtom[0].removeAttribute('disabled');
            calculateButtom[0].style.background = 'darkcyan';
        } else {
            calculateButtom[0].setAttribute('disabled', true);
            calculateButtom[0].style.background = 'grey';
        }

        if (numberPhone[6].value.length !== 0 &&
            numberPhone[7].value.length !== 0 &&
            numberPhone[8].value.length !== 0 &&
            numberPhone[9].value.length !== 0 &&
            numberPhone[10].value.length !== 0 &&
            numberPhone[11].value.length !== 0) {
            calculateButtom[1].removeAttribute('disabled');
            calculateButtom[1].style.background = 'darkcyan';
        } else {
            calculateButtom[1].setAttribute('disabled', true);
            calculateButtom[1].style.background = 'grey';
        }
    }
}

calculateButtom[0].addEventListener("click", () => {
    confirmation_of_shipment[0].innerHTML = "Повідомлення відправлено!!!"
    setTimeout(() => {
        confirmation_of_shipment[0].innerHTML = " "
    }, 2000)
})

calculateButtom[1].addEventListener("click", () => {
    confirmation_of_shipment[1].innerHTML = "Повідомлення відправлено!!!"
    setTimeout(() => {
        confirmation_of_shipment[1].innerHTML = " "
    }, 2000)
})

