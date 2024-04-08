let leave_review = document.querySelectorAll(".feedback_sending_block_button button");
let reviews_block_reviews = document.querySelector('.reviews_block_reviews');

console.log(leave_review);


function reviews_block_reviews_alert(){
    reviews_block_reviews.style.display = "block";
}

leave_review[1].addEventListener("click", reviews_block_reviews_alert);