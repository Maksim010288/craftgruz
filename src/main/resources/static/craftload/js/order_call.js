let block_order_a_call = document.querySelectorAll
(".header_order_call_div,.block_order_a_call, .block_order_a_call_form")

block_order_a_call[1].addEventListener("click", () => {
    block_order_a_call[1].style.display = "none"
    block_order_a_call[2].style.display = "none"
})

block_order_a_call[0].addEventListener("click", () => {
    block_order_a_call[1].style.display = "flex"
    block_order_a_call[2].style.display = "flex"
})

let block_order_a_call_form_input = document.querySelectorAll
(".block_order_a_call_form_input, .block_order_a_call_form_order")

block_order_a_call_form_input[2].setAttribute('disabled', true);
block_order_a_call_form_input[2].style.background = "grey"

for (let i = 0; i < 2; i++) {
    block_order_a_call_form_input[i].oninput = function () {
        if (block_order_a_call_form_input[0].value.length !== 0 &&
            block_order_a_call_form_input[1].value.length !== 0) {
            block_order_a_call_form_input[2].removeAttribute('disabled');
            block_order_a_call_form_input[2].style.background = 'darkcyan';
        } else {
            block_order_a_call_form_input[2].setAttribute('disabled', true);
            block_order_a_call_form_input[2].style.background = 'grey';
        }
    }
}