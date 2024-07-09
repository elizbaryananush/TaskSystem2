import React from 'react'
import '../css/SingleTask.scss'

function SingleTask({ backgroundColor, status }) {

    return (
        <div style={{ backgroundColor: backgroundColor }} className='SingleTask'>
            <div className="left">
                <p>Heading</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            {
                status !== 'complete' ? <button></button> : null
            }
        </div>
    )
}

export default SingleTask