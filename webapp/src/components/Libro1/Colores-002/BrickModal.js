import React from 'react'

import './Brick.scss'

const buildColor = (color) => {
    return {
        color 
    }
}


function BrickModal({ color, text, onClick, size }) {
    return (
        <div className="brick-container" >
            <div onClick={onClick} className={"brick" + (size ? "-" + size : "")} style={buildColor(color)}>
                <p className="vertical-center">{text}</p>
            </div>
        </div>
    )
}

export default BrickModal