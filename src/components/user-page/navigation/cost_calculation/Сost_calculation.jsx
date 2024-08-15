import React, {useEffect, useState} from "react";
import "../../../../css/header.css"

export default function CostCalculation() {
    const [costCalculation, setCostCalculations] = useState([]);
    const url = "/delete"
    const tel = "tel:"

    const cost_calc = () => {
        fetch("/get")
            .then(orders => orders.json())
            .then(orders => {
                setCostCalculations(orders)
            })
    }

    useEffect(() => {
        cost_calc()
    })


    return (
        <>
            <div className="cost_calculation">
                <table>
                    <tr>
                        <th>Імя</th>
                        <th>Номер телефона</th>
                        <th>Електронна почта</th>
                        <th>Відправка</th>
                        <th>Прибуття</th>
                        <th>Вага</th>
                        <th>Дата</th>
                        <th>Час</th>
                        <th>Видалити</th>
                    </tr>
                    {
                        costCalculation.map((o) => (
                            <tr>
                                <td key={o.name}>{o.name}</td>
                                <td key={o.phone}><a href={tel+o.phone}>{o.phone}</a></td>
                                <td key={o.email}>{o.email}</td>
                                <td key={o.point_of_departure}>{o.point_of_departure}</td>
                                <td key={o.destination}>{o.destination}</td>
                                <td key={o.weight}>{o.weight}</td>
                                <td key={o.date}>{o.date}</td>
                                <td key={o.time}>{o.time}</td>
                                <button onClick={() => {
                                    deleteById(o.id, url)
                                }}>Delete
                                </button>
                            </tr>
                        ))
                    }
                </table>

            </div>
        </>
    )
}

const deleteById = (numberId, url) => {
    fetch(url, {
        method: "DELETE",
        body: JSON.stringify({
            costCalculationId: numberId,
        }),
        headers: {
            "Content-Type": "application/json", charset: "UTF-8"
        }
    }).then(orders => console.log(orders))
}