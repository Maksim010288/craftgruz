import "./cars.css"
import Car_list from "../car_list/Car_list.jsx";
import carByData from "../data/carByData";

export default function Cars() {
    const value = {
        car_park: "Наш автопарк",
        cars: "Машини"
    }
    return (
        <>
            <div className="cars">
                <button className="about_us">{value.cars}</button>
                <p className="car_park">{value.car_park}</p>
                <div className="nav-list">
                    {
                        carByData.map((data) => (
                            <Car_list key={data.img} {...data}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}