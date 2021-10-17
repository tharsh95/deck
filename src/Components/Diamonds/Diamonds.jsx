import React from 'react'
import './diamonds.css'
const Diamonds = ({ number,suit }) => {
    return (
        <div className='container'>
            <div className="diamonds">
                <p>{number}</p>
                <p>{suit}</p>
            </div>
        </div>
    )
}

export default Diamonds
