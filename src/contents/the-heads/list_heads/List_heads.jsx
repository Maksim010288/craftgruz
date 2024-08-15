// eslint-disable-next-line react/prop-types
import './list_heads.css'

export default function List_heads({id, title}) {
    return (
        <div className="list-heads-div">
            <p className="id">{id}</p>
            <p className="title">{title}</p>
        </div>
    )
}