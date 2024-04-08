let header_menu = document.querySelectorAll(".header_menu");
const menu = document.querySelector('.menu');

menu.addEventListener("click", () => {
    for (let i = 0; i < header_menu.length; i++) {
        if (header_menu[i].style.display === "none") {
            header_menu[i].style.display = "block";
        } else {
            header_menu[i].style.display = "none";
        }
    }
});

document.querySelector(".about").addEventListener("mouseover", () => {
    for (let i = 0; i < header_menu.length; i++) {
        header_menu[i].style.display = "none";
    }
});


let blocks = document.querySelectorAll(".blocks .reviews_block1");
let block = document.querySelector(".blocks");

let number = 0;
let size = 3;


let width_block = blocks.length * 40;
block.style.width = width_block + "%";


function leftBut() {
    if (number < block.style.width) {
        number += 33;
        block.style.marginLeft = number + "%";
    } else {
        number = 0;
        block.style.marginLeft = 0 + "%";
    }
}

function rightBut() {
    if (size < blocks.length) {
        size++;
        number -= 33;
        block.style.marginLeft = number + "%";
    } else {
        size = 3;
        number = 0;
        block.style.marginLeft = 0 + "%";
    }
}

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    });
}


function enterOnButton(element, blocks) {
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener("click", () => {
            scrollTo(blocks[i])
        });
    }
}

function enter(element, block){
    for(let i = 0; i < car_button.length; i++) {
        element[i].addEventListener("click", () => {
            window.scroll({
                left: 0,
                top: block[5].offsetTop,
                behavior: 'smooth'
            })
        })
    }
}


document.querySelector(".left").addEventListener("click", leftBut)
document.querySelector(".right").addEventListener("click", rightBut)


let blocks_pages = document.querySelectorAll(".abaut_us_bloks, .cars_catalog_blok, .services_blok, .reviews_blok, .footer");
let blocks_pages_all = document.querySelectorAll("header, .abaut_us_bloks, .cars_catalog_blok, .services_blok,  .reviews_blok, .calculateCostBefore_bottom");


let menuHeader = document.querySelectorAll(".menu_header ul li");
enterOnButton(menuHeader, blocks_pages);

let headerMenu = document.querySelectorAll(".header_menu ul li");
enterOnButton(headerMenu, blocks_pages);

let footer_menu = document.querySelectorAll(".footer_menu1 p");
enterOnButton(footer_menu, blocks_pages_all);

let car_button = document.querySelectorAll('.header_order_call_div,.cars_button, .orderBut')
enter(car_button, blocks_pages_all)