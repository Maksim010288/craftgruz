import {datas} from "../different_data/data";
import ViewData from "./ViewDatas.jsx"
import "./company.css"
import Photos from "../../assets/Photos.jsx";
import Button from "../button/Button.jsx";

export default function Company() {
    const value = {
        text_but: "Розрахунок вартості перевезень",
        about_us: "Про нас"
    }

    return (
        <>
            <div className="company">
                <div className="photo">
                    <img src={Photos.photo._transporation} alt=""/>
                </div>

                <div className="company_advantages_of_our_">
                    <div className="advantages-about-us">
                        <p className="about_us">{value.about_us}</p>
                    </div>
                    <div className="advantages_of_our_company-p">
                        <p className="company_benefits">Переваги нашої компанії</p>
                    </div>
                    <div className="advantages_of_our_company">
                        <div className="advantages_of_our_company_data">
                            {
                                datas.map((data) => (
                                    <ViewData key={data.id} {...data}/>
                                ))
                            }
                            <button className="button">{value.text_but}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}