import '../../../css/header.css'
import Photos from "../../../assets/Photos.jsx";
import menu from "../../different_data/menu";
import scroll from "../../../js/CraftGruz";

export default function Header() {

    function block() {
        const clear =
            document.querySelectorAll(".order_call ,.order_call_header");
        clear[0].style.display = "block";
        clear[1].style.display = "flex";
    }

    return (
        <div className="header">
            <header>
                <div className="img">
                    <img onClick={() => {
                        document.querySelector(".content").style.display = 'none';
                        document.querySelector(".user-page").style.display = 'block';
                    }} src={Photos.photo.craft_gruz_photo}/>
                </div>
                <div className="menu">
                    <ul>
                        <li onClick={() => scroll.scrollTo('.company')}>{menu.menu.about_us}</li>
                        <li onClick={() => scroll.scrollTo('.cars')}>{menu.menu.park_car}</li>
                        <li onClick={() => scroll.scrollTo('.services')}>{menu.menu.services}</li>
                        <li onClick={() => scroll.scrollTo('.reviews')}>{menu.menu.reviews}</li>
                        <li></li>
                    </ul>
                </div>
                <div className="number_phone">
                    <a href="tel:+380978849050">+38(097) 884 9050</a>
                    <a href="tel:+380935157015">+38(093) 515 7015</a>
                </div>
                <div className="call_button">
                    <button className="button"
                            onClick={() => block()}>Замовити дзвінок
                    </button>
                </div>
            </header>
        </div>
    )
}

