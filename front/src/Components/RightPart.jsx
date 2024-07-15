import React, { useContext } from 'react'
import Calendar from './Calendar'
import '../css/RightPart.scss'
import { TaskContext, TaskProvider } from '../providers/TaskProvider'

function RightPart({setTaskDisplay}) {
const { selectedTaskId , setSelectedTaskId } = useContext(TaskContext)
    const handleButtonClick = () => {
        setTaskDisplay('flex');
    }

    return (
        <div className='RightPart'>
            <div onClick={handleButtonClick} className="addNew component">
                <p>Add New Task</p>
            </div>
            <Calendar />
        </div>
    )
}

export default RightPart