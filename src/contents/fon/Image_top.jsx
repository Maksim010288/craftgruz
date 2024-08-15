import './image_top.css'
import Photos from "../../assets/Photos.jsx";

export default function Image_top() {
    return (
        <>
            <div className="fon-header">
                <div className="fon-header-block">
                    <div className="img_p">
                        <img src={Photos.icons.one} alt=""/>
                        <p>Можливий попутний та збірний вантаж</p>
                    </div>
                    <p className="text2">Вантажні перевезення по Україні від 1 до 23 тонн</p>
                    <p className="text3">Наші менеджери допоможуть налагодити всі процеси і прорахувати
                        найвигідніший для вас варіант доставки.</p>
                </div>
            </div>
        </>
    )
}