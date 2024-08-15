import "./calculation.css"
import craftindex from "../../js/craftindex";
import {useEffect, useState} from "react";

export default function Calculation({flag}) {

    const [point_of_departure, setPoint_of_departure] = useState('');
    const [destination, setDestination] = useState('');
    const [weight, setWeight] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const text_input = {
        exp_calc: "Експрес розрахунок",
        exp_calc_price: "Експрес розрахунок вартості",
        point_of_departure: "Пункт відправки",
        destination: "Пункт призначення",
        weight: "Вага",
        name: "Імя",
        number_phone: "Номер телефона",
        email: "Email"
    }

    useEffect(() => {
        craftindex.inputValueTop(point_of_departure, destination, weight, name, phone, email, ".exp_calc_button")
    }, [point_of_departure, destination, weight, name, phone, email])

    function addNewCollection() {
        fetch("/add", {
            method: "POST",
            body: JSON.stringify({
                point_of_departure: point_of_departure,
                destination: destination,
                weight: weight,
                name: name,
                phone: phone,
                email: email,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString()
            }),
            headers: {
                "Content-Type": "application/json", charset: "UTF-8"
            }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
            })
    }


    return (
        <>
            <div className="calculation-top">
                <div className={
                    flag !== "top" ? "express_calc" : "express_calc_bottom"
                }>
                    <div className="exp_calc">
                        <p>{text_input.exp_calc_price}</p>
                    </div>
                    <div className="input">
                        <input id="input-val" type="text" placeholder={text_input.point_of_departure}
                               onChange={event =>
                                   setPoint_of_departure(event.target.value)}/>
                        <input id="input-val" type="text" placeholder={text_input.destination}
                               onChange={event =>
                                   setDestination(event.target.value)}/>
                        <input id="input-val" type="text" placeholder={text_input.weight}
                               onChange={event =>
                                   setWeight(event.target.value)}/>
                        <input id="input-val" type="text" placeholder={text_input.name}
                               onChange={event =>
                                   setName(event.target.value)}/>
                        <input id="input-val" type="text" placeholder={text_input.number_phone}
                               onChange={event =>
                                   setPhone(event.target.value)}/>
                        <input id="input-val" type="text" placeholder={text_input.email}
                               onChange={event =>
                                   setEmail(event.target.value)}/>
                    </div>
                    <div className="nav-list">
                        <div className="nav-list_p">
                            <p>Наш менеджер зателефонує Вам протягом 10 хвилин, (в робочий час) або напише повідомлення,
                                щоб
                                уточнити деталі та розрахувати вартість перевезення.</p>
                        </div>
                        <div className="nav-list_button">
                            <button type="button" onClick={() => {
                                addNewCollection()
                                craftindex.clearInput('#input-val')
                            }} className="exp_calc_button">{text_input.exp_calc}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}