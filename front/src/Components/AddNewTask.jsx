import React, { useState } from 'react'
import '../css/AddNewTask.scss'
import { TbTag, TbX, TbPalette } from 'react-icons/tb'

function AddNewTask({ display, setTaskDisplay }) {
    const [header, setHeader] = useState('')
    const [context, setContext] = useState('')
    const color = ['#ffbfbfff', '#ffadadff', '#ffcd8fff', '#fdffb6ff', '#f2f2ffff', '#caffbfff', '#bdb2ffff']

    const handleButtonClick = () => {
        setTaskDisplay('none');
    }

    const AddNewTask = async () => {
        if (header && header !== '') {
            const response = await fetch(`${process.env.REACT_APP_API_PATH}tasks/createNewTask`, {
                method: 'POST',
                body: JSON.stringify({
                    header,
                    context,
                    status: 'uncompleted',
                    user_id: localStorage.getItem('_id'),
                    color: color[Math.floor(Math.random() * color.length)]
                }),
                headers: {
                    'Content-Type': 'application/json',
                  },
            })

            window.location.href = '/'
        }else{
            alert('Header is required')
        }
    }

    return (
        <div style={{ display: display }} className='AddNewTask'>
            <div className="box">
                <div className="top">
                    <p>Task</p>
                    <div className="deadline">
                        <p>Deadline</p>
                        <p>Change Deadline</p>
                    </div>
                    <TbX onClick={handleButtonClick} />
                </div>
                <div className="middle">
                    <div className="header">
                        <p>Header</p>
                        <textarea
                            placeholder='Header'
                            value={header}
                            onChange={e => setHeader(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="context">
                        <p>Context</p>
                        <textarea
                            placeholder='Context'
                            value={context}
                            onChange={e => setContext(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="bottom">
                    <div className="icons">
                        <TbTag />
                        <TbPalette />
                    </div>
                    <button onClick={AddNewTask}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewTask