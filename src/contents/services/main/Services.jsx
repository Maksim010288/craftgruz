import "./services.css"
import service_data from "../data/DataService.jsx";
import Service_list from "../service_list/Service_list.jsx";

export default function Services() {
    const value = {
        services: "Пoслуги",
        transportation: "Які перевезення ми здійснюємо?"
    }
    return (
        <>
            <div className="services">
                <button className="services_p">{value.services}</button>
                <p className="services_p_">{value.transportation}</p>
                <div className="services_list">
                    {
                        service_data.map((data) => (
                            <Service_list key={data.title} {...data}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}