import "./reviews.css"
import Test from "../../../components/test/Test";
import SendReview from "../../send_review/SendReview";

export default function Reviews() {
    return (
        <div className="reviews">
            <div className="reviews-header">
                <div className="reviews-navi">
                    <button className="reviews-navi-button">Відгуки</button>
                    <p className="reviews-navi-p">Що говорять наші клієнти?</p>
                </div>
                <div className="reviews-direction">

                </div>
            </div>
            <div className="reviews-main">
                <Test/>
            </div>
            <SendReview/>
            <div className="reviews-footer">
                <div className="reviews-footer-buttons">
                    <p className="reviews-footer-buttons_p">
                        Ми будемо раді вашим відгукам.
                    </p>
                    <button
                        className="reviews-footer-buttons_n1">Розрахунок вартості перевезень
                    </button>
                    <button onClick={() => {
                        document.querySelector('.row').style.display = 'flex';
                    }} className="reviews-footer-buttons_n2">Залишити відгук</button>
                </div>
            </div>
        </div>
    )
}