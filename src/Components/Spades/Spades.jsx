import React from 'react'
import './spades.css'
const Spades = ({number,suit}) => {
    return (
        <div className="container">
            <div className="spades">
            <p>{number}</p>
            <p>{suit}</p>
            </div>
        </div>
    )
}

export default Spades
 