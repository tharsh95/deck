import React from 'react'
import './clubs.css'
const Clubs = ({ number, suit }) => {
    return (
        <div className='container'>
            <div className="clubs">
                <p>{number}</p>
                <p>{suit}</p>
            </div>
        </div>
    )
}

export default Clubs
