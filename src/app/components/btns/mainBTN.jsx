import React from 'react'
import './globals.css'

const MainBTN = (props) => {
    return (
        <div className='mainTitle'>
            <h2 className='title'> {props.mainTitle} </h2>
        </div>
    )
}

export default MainBTN