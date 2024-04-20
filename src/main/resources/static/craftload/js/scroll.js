function enter(element, block){
    for(let i = 0; i < element.length; i++) {
        element[i].addEventListener("click", () => {
            window.scroll({
                left: 0,
                top: block[5].offsetTop,
                behavior: 'smooth'
            })
        })
    }
}

let blocks_pages_all = document.querySelectorAll("header, .abaut_us_bloks, .cars_catalog_blok, .services_blok,  .reviews_blok, .calculateCostBefore_bottom");
let buttons = document.querySelectorAll('.calculation, .orderBut, .car_button')
enter(buttons, blocks_pages_all)