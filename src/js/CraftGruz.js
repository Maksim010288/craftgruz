let company = document.querySelectorAll(".header, .company, .cars, .services, .reviews");
let expressCalk = document.querySelectorAll(".express_calc, .express_calc_bottom")

function scrollTo(element) {
   let nameClass = document.querySelector(element)
    window.scroll({
        left: 0,
        top: nameClass.offsetTop,
        behavior: 'smooth'
    })
}

export default {
    scrollTo
}
