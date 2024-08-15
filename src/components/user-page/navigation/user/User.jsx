import '../../../../css/header.css';
import Navigation from "../Navigation";
import Order from "../order/Order";
import CostCalculation from "../cost_calculation/Сost_calculation";

function User() {
    return (
        <div className="App">

            <Navigation/>
            <Order.Order/>
            <CostCalculation/>
        </div>
    );
}

export default User;
