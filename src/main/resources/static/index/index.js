let but = document.querySelectorAll('.submit');

console.log(but);

but.setAttribute('disabled', true);
but.style.background = 'grey';

let input = document.querySelectorAll('.input, textarea');

for(let i = 0; i < input.length; i++){
    input[i].oninput = function(){
        if(input[0].value.length !== 0 && input[1].value.length !== 0 && input[2].value.length !== 0 && input[3].value.length !== 0){
            but[0].removeAttribute('disabled');
            but[0].style.background = 'darkcyan';
            console.log("true")
        } else {
            but[0].style.background = 'grey';
            but[0].setAttribute('disabled', true);
        }
    }
}
