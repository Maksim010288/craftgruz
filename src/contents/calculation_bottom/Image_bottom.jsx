import './image_bottom.css'
import Calculation from "../calculation_top/Calculation.jsx";

export default function Image_bottom() {
    const box ="top"
    return (
        <>
            <div className="image-bottom">
                    <Calculation flag={box}/>
            </div>
        </>
    )
}