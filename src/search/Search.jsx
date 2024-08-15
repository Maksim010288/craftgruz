import '../../src/search/search.css'
import React, {useEffect, useRef} from "react";

export default function Search() {
    const url = "https://jsonplaceholder.typicode.com/comments"
    const [comments, setComments] = React.useState([])
    const [search, setSearch] = React.useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setComments(res))

        inputRef.current.focus()
        inputRef.current.style.color = "blue"
    })


    function getOptions(word) {
        return comments.filter(s => {
            return s.email.match(new RegExp(word, "gi"))
        })
    }


    return (
        <>
            <div className="search-panel">
                <div className="search">
                    <input
                        ref={inputRef}
                        placeholder="Введіть електронну адресу"
                        onChange={event =>
                            setSearch(event.target.value)} type="text"/>
                    <ul>
                        {getOptions(search.length === 0 ? null : search).map((comment) => (
                            <a href={"mailto:" + comment.email}>
                                <li key={comment.id}>{comment.email}</li>
                            </a>
                        )).slice(0, comments.length)}
                    </ul>
                </div>
                <div className="search-content"></div>
            </div>
        </>
    )
}