import React from 'react'
import SingleTask from '../Components/SingleTask'
import '../css/MainPage.scss'

function MainPage() {
  return (
    <div className='MainPage'>
      {/* <SingleTask backgroundColor='#ffbfbfff'/> */}
      <div className="top component">
        <h2>Progress</h2>
        <div className="bars">
          <div className="progress">
            <p>Completed</p>
            <p>3</p>
          </div>
          <div className="progress">
            <p>Pending</p>
            <p>4</p>
          </div>
          <div className="progress">
            <p>Canceled</p>
            <p>0</p>
          </div>
          <div className="progress">
            <p>Overall</p>
            <p>15</p>
          </div>
        </div>
      </div>
      <div className="tasks">
        <div className="complete bar component">
          <h4>Uncomplete Tasks</h4>
          <div className="bottom">
            <SingleTask backgroundColor='#fbffbfff' />
            <SingleTask backgroundColor='#ffcd8fff' />
            <SingleTask backgroundColor='#f2f2ffff' />
          </div>
        </div>
        <div className="uncomplete bar component">
          <h4>Complete Tasks</h4>
          <div className="bottom">
            <SingleTask backgroundColor='#bdb2ffff' status={'complete'}/>
            <SingleTask backgroundColor='#ffadadff' status={'complete'}/>
            <SingleTask backgroundColor='#bdb2ffff' status={'complete'}/>
          </div>
        </div>
        <div className="pending bar component">
          <h4>Pending Tasks</h4>
          <div className="bottom">
            <SingleTask backgroundColor='#ffcd8fff' />
            <SingleTask backgroundColor='#fdffb6ff' />
            <SingleTask backgroundColor='#ffbfbfff' />
            <SingleTask backgroundColor='#ffffbfff' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage