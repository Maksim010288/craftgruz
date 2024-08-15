import "../../../src/css/header.css"
import Navigation from "./navigation/Navigation";
import Order from "./navigation/order/Order";
import CostCalculation from "./navigation/cost_calculation/Сost_calculation";

export default function UserPage() {
    return (
        <>
            <div className="user-page">
                <Navigation/>
                <div className="user-page-header">
                    <Order.Order/>
                    <CostCalculation/>
                </div>
            </div>
        </>
    )
}