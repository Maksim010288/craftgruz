let exit = document.querySelector('.img');
let review = document.querySelector('.reviews_block_reviews');


exit.addEventListener('click', ()=>{
    review.style.display = 'none'
});


let addreview = document.querySelector('.addReview');
addreview.addEventListener('click', ()=>{
    review.style.display = 'block'
});
