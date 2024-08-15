import React, {useEffect, useState, useRef} from "react";
import "../../../../css/header.css"

function Order() {
    const [order, setOrders] = useState([]);
    const inputRef = useRef(null);
    const url = "/order/deleteBy/id"
    const check = "false";

    const orders = () => {
        fetch("/order/get")
            .then(orders => orders.json())
            .then(orders => {
                setOrders(orders)
            })
    }

    useEffect(() => {
        orders()
    })

    return (
        <>
            <div className="order">
                <input ref={inputRef} type="text"/>
                <table>
                    <tr ref={inputRef}>
                        <th>Імя</th>
                        <th>Телефон</th>
                        <th>Видалити</th>

                    </tr>
                    {
                        order.map((o) => (
                            <tr>
                                <td key={o.name}>{o.name}</td>
                                <td key={o.numberPhone}>{o.numberPhone}</td>
                                <td>
                                    {/*<button onClick={() => {*/}
                                    {/*    deleteById(o.id, url)*/}
                                    {/*}}>Delete*/}
                                    {/*</button>*/}

                                    <input type="checkbox" onClick={() => (
                                        check ? deleteById(o.id, url) : null
                                    )}/>
                                </td>
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
            orderId: numberId,
        }),
        headers: {
            "Content-Type": "application/json", charset: "UTF-8"
        }
    }).then(orders => console.log(orders))
}

export default {
    Order
}