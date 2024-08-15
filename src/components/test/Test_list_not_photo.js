import './test.css'

export default function Test_list_not_photo({point, enterprise, description}) {

    return (
        <div className="test_list">
            <div>
                <div className="test_list_enterprise">
                    <p className="enterprise">{enterprise}</p>
                </div>
                <p className="description">{description}</p>
                <h2 className="point">{point.departure}<span>---</span>{point.arrival}</h2>
            </div>
        </div>
    )
}