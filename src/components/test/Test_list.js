import './test.css'

export default function Test_list({nameCar, brandCar, description, photos}) {

    return (
        <div className="Test_list">
            <div>
                <p>{description}</p>
                <h5>{nameCar}<span>{brandCar}</span></h5>
                <div className="div-img">
                    {
                        photos.map((photo) => (
                            <img src={photo.url} alt=""/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}