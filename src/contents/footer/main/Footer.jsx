import "../../../css/header.css"
import Photos from "../../../assets/Photos.jsx";
import menu from "../../different_data/menu";
import scrollTo from "../../../js/CraftGruz.js";

export default function Footer() {

    return (
        <div className="footer-main">
            <div className="footer-main-block1">
                <ul className="footer-main-block-ul">
                    <li onClick={() => scrollTo.scrollTo('.header')} className="main">{menu.menu.main}</li>
                    <li onClick={() => scrollTo.scrollTo('.company')}>{menu.menu.about_us}</li>
                    <li onClick={() => scrollTo.scrollTo('.cars')}>{menu.menu.park_car}</li>
                    <li onClick={() => scrollTo.scrollTo('.services')}>{menu.menu.services}</li>
                    <li onClick={() => scrollTo.scrollTo('.reviews')}>{menu.menu.reviews}</li>
                </ul>
            </div>
            <div className="footer-main-block2">
                <img className="footer-main-block2-img" src={Photos.photo.craft_gruz_photo} alt="craft gruz"/>
                <p className="footer-main-block2-work-clock">
                    Ми працюємо з 9:00 до<br/>
                    19:00 за київським<br/>
                    часом
                </p>
                <div className="footer-main-block2-social-natworks">
                    <a href="https://www.facebook.com/profile.php?id=61553765600095" target="_blank">
                        <img className="footer-main-block2-social-natworks-img" src={Photos.icons.facebook} alt=""/>
                    </a>
                    <a href="https://www.instagram.com/craftgruz/?next=%2Ftmcraftgruz%2F" target="_blank">
                        <img className="footer-main-block2-social-natworks-img" src={Photos.icons.instagram} alt=""/>
                    </a>
                    <a href="https://www.tiktok.com/@craftgruz?_t=8lqQZerk4Dl&_r=1" target="_blank">
                        <img className="footer-main-block2-social-natworks-img" src={Photos.icons.tiktok} alt=""/>
                    </a>
                </div>
            </div>
            <div className="footer-main-block3">
                <ul className="footer-main-block3-ul">
                    <li className="footer-main-block3-ul-li">{menu.contacts.contact}</li>
                    <a href="tel:+380978849050">
                        <li className="footer-main-block3-ul-li">{menu.contacts.number_phone_kyivstar}</li>
                    </a>
                    <a href="tel:+380935157015">
                        <li className="footer-main-block3-ul-li">{menu.contacts.number_phone_life}</li>
                    </a>
                    <a href="mailto:logistics-ukraine@ukr.net">
                        <li>{menu.contacts.email}</li>
                    </a>
                </ul>
            </div>
        </div>
    )
}