let submit = document.querySelector(".submitMessage")
let blocks = document.querySelector("#bloks");
let reviews_blok1 = document.querySelectorAll('.reviews_blok1')




let lengthBlok = reviews_blok1.length * 100
blocks.style.width = lengthBlok + "%"


    let number = 0; 
    let size = 0;



    function leftBut(){
        if(reviews_blok1.length > size){
            size = 0
            number = 0;
            blocks.style.marginLeft = 0 + "px";
        }else{
            size++;
            number += 420;
            blocks.style.marginLeft = number + "px";

            }
        }

    function rightBut(){
        if(size < reviews_blok1.length){
            size++;
            number -= 420;
            blocks.style.marginLeft = number + "px";
        }else{
            size = 0;
            number = 0;
            blocks.style.marginLeft = 0 + "%";
            }
        }

        document.querySelector(".left").addEventListener("click", leftBut)
        document.querySelector(".right").addEventListener("click", rightBut)