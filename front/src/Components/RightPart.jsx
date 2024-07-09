import React from 'react'
import Calendar from './Calendar'
import '../css/RightPart.scss'

function RightPart() {
    return (
        <div className='RightPart'>
            <div className="addNew component">
                <p>Add New Task</p>
            </div>
            <Calendar />
        </div>
    )
}

export default RightPart