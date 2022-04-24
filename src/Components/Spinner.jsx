import React from 'react'
import spinner from '../Images/spinner.gif'
const Spinner = () => {
    return (
        <section>
            <img style={{height: "230px", width: "230px", margin: "auto", display: "block"}} src={spinner} alt="Loading" />
        </section>
    )
}

export default Spinner
