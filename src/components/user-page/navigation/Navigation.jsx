import "../../../css/header.css"

const Navigation = () => {
    let flag = true;

    const nav_value = {
        orderCall: "Замовлені дзвінки",
        reviews: "Відгуки",
        mainPage:"Головна сторінка"
    }

    function toggleNav(nameTag) {
        let order = document.querySelector(nameTag);
        if (flag) {
            flag = false;
            order.style.display = 'flex';
        } else {
            flag = true;
            order.style.display = 'none';
        }
    }

    return (
        <>
            <div className="navigation">
                {/*<button onClick={() => toggleNav(".order")}>{nav_value.orderCall}</button>*/}
                {/*<button onClick={() => toggleNav(".cost_calculation")}>{nav_value.reviews}</button>*/}
                <button onClick={() => {
                    document.querySelector(".content").style.display = 'block';
                    document.querySelector(".user-page").style.display = 'none';
                }}>{nav_value.mainPage}</button>
                {/*<button></button>*/}
                {/*<button></button>*/}
                {/*<button></button>*/}
                {/*<button></button>*/}
            </div>
        </>
    )
}

export default Navigation;