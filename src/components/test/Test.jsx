import {useEffect, useState} from "react";
import Test_list from "./Test_list";
import Test_list_not_photo from "./Test_list_not_photo";



export default function Test() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('reviews/get')
            .then(element => element.json())
            .then(element => {
                console.log(element);
                setList(element)
            });
    }, []);


    return (
        <div className="Test">
            <div className="test-list-not-phone">
                {
                    list.map((review) => (
                        <Test_list_not_photo key={review.id} {...review}/>
                    ))
                }
            </div>
        </div>
    )
}