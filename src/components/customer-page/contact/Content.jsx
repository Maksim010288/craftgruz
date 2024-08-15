import "../../../css/header.css"
import Image_top from "../../../contents/fon/Image_top";
import Calculation from "../../../contents/calculation_top/Calculation";
import Company from "../../../contents/about_us/Company";
import Cars from "../../../contents/cars/main/Cars";
import Services from "../../../contents/services/main/Services";
import Heads from "../../../contents/the-heads/main/Heads";
import Reviews from "../../../contents/reviews/main/Reviews";
import Image_bottom from "../../../contents/calculation_bottom/Image_bottom";
import Header from "../../../contents/header/main/Header";
import Footer from "../../../contents/footer/main/Footer";
import OrderCall from "../../../contents/order_call/OrderCall";

export default function Content() {
    return(
        <div className="content">
            <Header/>
            <Image_top/>
            <Calculation/>
            <Company/>
            <Cars/>
            <Services/>
            <Heads/>
            <Reviews/>
            <Image_bottom/>
            <Footer/>
            <OrderCall/>
        </div>
    )
}