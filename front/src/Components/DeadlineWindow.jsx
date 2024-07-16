import React from 'react'
import '../css/DeadlineWindow.scss'

function DeadlineWindow({ display, setDisplay, deadline, setDeadline }) {

    const handleClick = (e) => {
        e.preventDefault()
        setDisplay(false)
    }

    return (
        <div style={display ? { display: 'flex' } : { display: 'none' }} className='DeadlineWindow'>
            <form>
                <input
                    value={deadline}
                    onChange={e => setDeadline(e.target.value)}
                    type="date" />
                <button onClick={(e) => handleClick(e)} className='button'>Submit</button>
            </form>
        </div>
    )
}

export default DeadlineWindow