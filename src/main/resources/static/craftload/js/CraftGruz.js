$(document).ready(function(){

let menuNone = document.querySelector(".menu");

let header_menu = document.querySelectorAll(".header_menu");

    $(".menu").on("click", ()=>{
            for(let i = 0; i < header_menu.length; i++){
                if(header_menu[i].style.display==="none"){
            header_menu[i].style.display="block";
            }else{
                header_menu[i].style.display="none";
            }
        }
    });

    $(".about").on("mouseover", ()=>{
        for(let i = 0; i < header_menu.length; i++){
            header_menu[i].style.display="none";
        }
    });


    function scrollTo(element){
        window.scroll({
            left: 0,
            top: element.offsetTop,
            behavior: 'smooth'
        })
    }


    function enterOnButton(element, bloks){
        for(let i = 0; i< element.length; i++){
            element[i].addEventListener("click", ()=>{
                    scrollTo(bloks[i])
                })
        }
    }



    
    let bloks_pages = document.querySelectorAll(".abaut_us_bloks, .cars_catalog_blok, .services_blok, .reviews_blok, .footer");
    let bloks_pages_all = document.querySelectorAll("header, .abaut_us_bloks, .cars_catalog_blok, .services_blok,  .reviews_blok");


    let menuHeader = document.querySelectorAll(".menu_header ul li");
    enterOnButton(menuHeader, bloks_pages)
  
    let headerMenu = document.querySelectorAll(".header_menu ul li");
    enterOnButton(headerMenu, bloks_pages)

    let footer_menu = document.querySelectorAll(".footer_menu1 p");
       enterOnButton(footer_menu, bloks_pages_all)
});