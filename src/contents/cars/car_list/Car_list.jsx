import "./car_list.css"

export default function Car_list({img, title}) {
    return (
        <>
            <div className="block_info_car">
                <div className="block_photo">
                    <img src={img} alt=""/>
                </div>
                <div className="block_info">
                    <p>{title}</p>
                    <button
                        className="button_order_car"
                    >Замовити машину
                    </button>
                </div>
            </div>
        </>
    )
}

