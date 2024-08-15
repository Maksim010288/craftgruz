import "./service_list.css"
// eslint-disable-next-line react/prop-types
export default function Service_list({img, title, description}) {

    return (
        <>
            <div className="services">
                <div className="services_list">
                    <img src={img} alt=""/>
                    <h2>{title}</h2>
                    <h4>{description}</h4>
                </div>
            </div>
        </>
    )
}