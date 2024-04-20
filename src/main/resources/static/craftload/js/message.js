let but = document.querySelector(".submitMessage");
but.setAttribute('disabled', true);
but.style.background = 'grey';
let input = document.querySelectorAll('.input, .input1');

console.log(but)

for(let i = 0; i < input.length; i++){
    input[i].oninput = function(){
        if(input[0].value.length !== 0 && input[1].value.length !== 0 && input[2].value.length !== 0 && input[3].value.length !== 0){
            but.removeAttribute('disabled');
            but.style.background = 'darkcyan';
        } else {
            but.style.background = 'grey';
            but.setAttribute('disabled', true);

        }
    }
}