
function inputValueTop(point_of_departure, destination, name, email, weight, phone, classNameBut){
    let but = document.querySelectorAll(classNameBut)
    for (let i = 0; i < but.length; i++) {
        but[i].setAttribute('disabled', true)
        but[i].style.background = 'grey';
        if (point_of_departure.length !== 0 && destination.length !== 0
            && name.length !== 0 && weight.length !== 0 && phone.length !== 0
            && email.length !== 0) {
            but[i].removeAttribute('disabled');
            but[i].style.background = 'darkcyan';
        } else {
            but[i].style.background = 'grey';
            but[i].setAttribute('disabled', true);
        }
    }
}

function clearInput(inputName){
   let inputValue = document.querySelectorAll(inputName);
   for (let i = 0; i < inputValue.length; i++){
       inputValue[i].value = '';
   }
}

export default {
    inputValueTop, clearInput
}