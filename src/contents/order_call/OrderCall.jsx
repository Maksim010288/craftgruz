import './order_call.css';
import React, {useState, useRef, useEffect} from 'react';
import Photos from "../../assets/Photos";

export default function OrderCall() {
    const [name, setName] = useState(null);
    const [numberPhone, setNumberPhone] = useState(null);
    const [error, setError] = useState(null);
    const [orderCall, setOrderCall] = useState(null)

    const clearName = useRef(null)
    const clearNumberPhone = useRef(null)

    function mess(message) {
        setError(message)
        setTimeout(() => {
            setError("")
        }, 3000)
    }

    function clear() {
        setName(null)
        setNumberPhone(null)
        clearName.current.value = ""
        clearNumberPhone.current.value = ""
    }

    const getOrder = (number) => {
        fetch("/order/")
            .then(order => order.json())
            .then(orders => {
                for (let i = 0; i < orders.length; i++) {
                    if (orders[i].numberPhone === number) {
                       setTimeout(() => {
                           setOrderCall("")
                       }, 2000)
                        setOrderCall("this phone number already exists")
                    }
                }
            })
    }

    const deleteById = () => {
        fetch("/order/", {
            method: "DELETE",
            body: JSON.stringify({

            })
        })
    }

// useEffect(() => {
//     getOrder("0505676675")
// }, [])


    function createOrder() {
        if (name === null || numberPhone === null) {
            mess("You not entered a number phone or name ")
        } else {
            fetch("/order/", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    numberPhone: numberPhone,
                }),
                headers: {
                    "Content-Type": "application/json", charset: "UTF-8"
                }
            }).then((res) => res.json()).then((res) => {
                console.log(res)
            })
        }
    }

    function block(element) {
        const clear = document.querySelectorAll(".order_call ,.order_call_header");
        for (let i = 0; i < clear.length; i++) {
            clear[i].style.display = element;
        }
    }

    return (
        <>
            <div className="order_call"></div>
            <div className="order_call_header">
                <div className="order_call_header_form">
                    <div className="order_call_header_end">
                        <img onClick={() => {
                            block("none")
                        }} className="order_call_header_end_img" src={Photos.icons.end2} alt=""/>
                    </div>
                    <input ref={clearName}
                           className="order_call_header_name"
                           type="text" placeholder="Ваше імя"
                           onChange={e => {
                               setName(e.target.value)
                           }}/>
                    <input ref={clearNumberPhone}
                           className="order_call_header_number"
                           type="tel" placeholder="Номер телефона"
                           onChange={e =>
                               setNumberPhone(e.target.value)}/>
                    <input className="order_call__header_button"
                           type="button"
                           value="Замовити дзвінок"
                           onClick={() => {
                               createOrder()
                               clear()
                               getOrder(numberPhone)
                           }}/>
                    <div>
                        <p>{error}</p>
                        <p className="order-call-message">{orderCall}</p>
                    </div>
                </div>
            </div>
        </>
    )
}