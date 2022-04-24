 import React, { useState } from 'react'

const SearchBar = (props) => {

    const [text, setText] = useState("")
    const HandleChange = (e) => {
        e.preventDefault();
        setText(e.target.value)
        props.setQuery(e.target.value)
    }
    return (
        <div>
            <section className="search">
                <form >
                    <input
                        className="input"
                        placeholder="Search Character"
                        autoFocus
                        name="search"
                        value={text}
                        type="text"
                        onChange={HandleChange}
                        id="search"
                    />
                </form>
            </section>
        </div>
    )
}

export default SearchBar;