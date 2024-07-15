import React, { useContext, useEffect, useState } from 'react'
import '../css/SingleTask.scss'
import { TaskContext } from '../providers/TaskProvider'
import { TbCheck } from 'react-icons/tb'

function SingleTask({ backgroundColor, header, context, id, status }) {
    const { selectedTaskId, setSelectedTaskId } = useContext(TaskContext)
    const [thisStatus, setThisStatus] = useState(status)

    const handleTaskClick = () => {
        setSelectedTaskId(id)
    }


    const updateTask = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_PATH}tasks/updateTask`, {
            method: 'POST',
            body: JSON.stringify({
                _id: id,
                status: thisStatus === 'completed' ? 'uncompleted' : 'completed',
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const data = await response.json();

        console.log(data);
    }

    const handleChecking = () => {
        updateTask()
        thisStatus === 'completed' ? setThisStatus('uncompleted') : setThisStatus('completed')
        window.location.href='/'
    }

    return (
        <div onClick={handleTaskClick} style={{ backgroundColor: backgroundColor }} className='SingleTask'>
            <div className="left">
                <p>{header}</p>
                <p>{context}</p>
            </div>
            <button onClick={handleChecking}>
                {thisStatus === 'completed' && <TbCheck />}
            </button>
        </div>
    )
}

export default SingleTask