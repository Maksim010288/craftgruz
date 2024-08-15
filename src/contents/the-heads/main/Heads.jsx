import "./heads.css"
import Photos from "../../../assets/Photos.jsx";
import list_heads_data from "../data_list_heads/List_heads_data.jsx";
import List_heads from "../list_heads/List_heads.jsx";

export default function Heads() {
    return (
        <>
            <div className="heads">
                <img src={Photos.photo.on_the_hands} alt=""/>
                <div className="_heads_button">
                    <button className="heads_button">Як ми працюємо</button>
                    <p className="p">Етапи нашої співпраці</p>
                </div>
                <div className="heads_info">
                    {
                        list_heads_data.map((data) => (
                            <List_heads key={data.title} {...data}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}