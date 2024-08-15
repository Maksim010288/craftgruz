// eslint-disable-next-line react/prop-types
import "./viewDatas.css"

export default function ViewDatas({img, title, description}) {
    return (
        <div className="advantages_of_our_company_view">
            <img src={img} alt=""/>
            <p className="advantages-of-our-company-view-title">{title}</p>
            <p className="description">{description}</p>
        </div>
    )
}