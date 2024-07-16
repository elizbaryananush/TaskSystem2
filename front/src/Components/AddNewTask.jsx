import React, { useState } from 'react'
import '../css/AddNewTask.scss'
import { TbX, TbPalette } from 'react-icons/tb'
import PaletteWindow from './PaletteWindow'
import DeadlineWindow from './DeadlineWindow'

function AddNewTask({ display, setTaskDisplay }) {
    const [header, setHeader] = useState('')
    const [context, setContext] = useState('')
    const [paletteDisplay, setPaletteDisplay] = useState(false)
    const [deadlineWDisplay, setDeadlineWDisplay] = useState(false)
    const [deadline, setDeadline] = useState()
    const color = ['#ffbfbfff', '#ffadadff', '#ffcd8fff', '#fdffb6ff', '#f2f2ffff', '#caffbfff', '#bdb2ffff']
    const [taskColor, setTaskColor] = useState(color[Math.floor(Math.random() * color.length)])

    const AddNewTask = async () => {
        if (header && header !== '') {
            const response = await fetch(`${process.env.REACT_APP_API_PATH}tasks/createNewTask`, {
                method: 'POST',
                body: JSON.stringify({
                    header,
                    context,
                    status: 'uncompleted',
                    hashtags: [],
                    user_id: localStorage.getItem('_id'),
                    color: taskColor,
                    deadline: deadline ? deadline : new Date(0),
                    priority: 0,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            window.location.href = '/'
        } else {
            alert('Header is required')
        }
    }

    const closeWindow = () => {
        setTaskDisplay(false)
    }

    const handleWindowOpening = (setThisWindow, thisWindow) => {
        setDeadlineWDisplay(false)
        setPaletteDisplay(false)
        setThisWindow(!thisWindow)
      }

    return (
        <div style={display ? {display : 'flex'} : {display : 'none'}} className='AddNewTask'>
            <div className="box">
                <DeadlineWindow
                    display={deadlineWDisplay}
                    setDisplay={setDeadlineWDisplay}
                    deadline={deadline}
                    setDeadline={setDeadline} />
                <PaletteWindow
                    display={paletteDisplay}
                    color={taskColor}
                    setTaskColor={setTaskColor} />
                <div className="top">
                    <p>Task</p>
                    <div className="deadline">
                        <p>Deadline</p>
                        <p onClick={() => handleWindowOpening(setDeadlineWDisplay, deadlineWDisplay)}>{deadline ? deadline : 'Change Deadline'}</p>
                    </div>
                    <TbX onClick={closeWindow} />
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
                        <TbPalette onClick={() => handleWindowOpening(setPaletteDisplay , paletteDisplay)} />
                    </div>
                    <button onClick={AddNewTask}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewTask