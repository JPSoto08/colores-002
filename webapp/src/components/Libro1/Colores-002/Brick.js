import React from 'react'

import './Brick.scss'

const buildColor = (color) => {
    return {
        color 
    }
}

function Brick({ color, text, size }) {
    return (
        <div className="brick-container">
            <div className={"brick" + (size ? "-" + size : "")} style={buildColor(color)}>
                {/* <p className="vertical-center">{text}</p> */}
            </div>
        </div>
    )
}

export default Brick
