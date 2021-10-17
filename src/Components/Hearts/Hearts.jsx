import React from 'react'
import './hearts.css'
const Hearts = ({number,suit}) => {
    return (
        <div className="container">
            <div className="hearts">
                <p>{number}</p>
                <p>{suit}</p>

            </div>
            
        </div>
    )
}

export default Hearts
