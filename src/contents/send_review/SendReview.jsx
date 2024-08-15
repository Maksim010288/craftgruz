import './../../../src/css/header.css'
import Image from "../../assets/Photos"
import {useRef, useState} from "react";

export default function SendReview() {
    let response = false;
    let messageOne = "Message sender"
    let errorOne = "Fill in all fields"

    const [departure, setDeparture] = useState(null)
    const [arrival, setArrival] = useState(null)
    const [enterprise, setEnterprise] = useState(null)
    const [description, setDescription] = useState(null)
    const [error, setError] = useState(null)

    const clearDepartureInput = useRef(null)
    const clearArrivalInput = useRef(null)
    const clearEnterpriseInput = useRef(null)
    const clearDescriptionTextArea = useRef(null)

    function mess(message) {
        setError(message)
        setTimeout(() => {
            setError("")
        }, 3000)
    }

    function clear() {
        clearDepartureInput.current.value = ""
        clearArrivalInput.current.value = ""
        clearEnterpriseInput.current.value = ""
        clearDescriptionTextArea.current.value = ""
        setDeparture(null)
        setArrival(null)
        setEnterprise(null)
        setDescription(null)
    }


    function sendReview() {
        if (departure == null || departure === "" &&
            arrival == null || arrival === "" &&
            enterprise == null || enterprise === null &&
            description === null || description === null) {
            response = true;
        } else {
            fetch("/reviews/", {
                method: "POST",
                body: JSON.stringify({
                    point: {
                        departure: departure,
                        arrival: arrival
                    },
                    enterprise: enterprise,
                    description: description,
                }),
                headers: {
                    "Content-Type": "application/json", charset: "UTF-8"
                }
            })
                .then(res => res.json()).then((res) => {
                console.log(res)
                response = false;
            })
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="col-sm-12-img">
                        <img onClick={() => {
                            document.querySelector('.row').style.display = 'none';
                        }} src={Image.icons.end2} alt=""/>
                    </div>
                    <input ref={clearDepartureInput} type="text"
                           placeholder="Пункт відправки"
                           onChange={event => setDeparture(event.target.value)}/>
                    <input ref={clearArrivalInput} type="text"
                           placeholder="Пункт призначення"
                           onChange={event => setArrival(event.target.value)}/>
                    <input ref={clearEnterpriseInput} type="text"
                           placeholder="Підприємство"
                           onChange={event => setEnterprise(event.target.value)}/>
                    <textarea ref={clearDescriptionTextArea}
                              placeholder="Опис" rows="10"
                              onChange={event => setDescription(event.target.value)}/>
                    <button
                        onClick={() => {
                            sendReview()
                            !response ? mess(messageOne) : mess(errorOne)
                            clear()
                        }}
                        type="submit"
                        className="coll-12-button">Відправити
                    </button>
                </div>
            </div>
            <div className="message">
                <p>{error}</p>
            </div>
        </>
    )
}