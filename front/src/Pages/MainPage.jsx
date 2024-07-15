import React, { useContext, useEffect, useState } from 'react'
import SingleTask from '../Components/SingleTask'
import '../css/MainPage.scss'
import { TaskContext } from '../providers/TaskProvider'

function MainPage() {
  const [taskss, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [uncompletedTasks, setUnCompletedTasks] = useState([])
  const [status, setStatus] = useState()
  const _id = localStorage.getItem('_id')

  const getTasks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_PATH}tasks/getTasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: `${_id}`
      }),
    });

    const data = await response.json();

    console.log(data);

    const completed = data.filter(task => task.status === 'completed');
    const uncompleted = data.filter(task => task.status === 'uncompleted');

    setCompletedTasks(completed);
    setUnCompletedTasks(uncompleted);

    return setTasks(data)
  }

  useEffect(() => {
    getTasks()

  }, [])

  return (
    <div className='MainPage'>
      <div className="top component">
        <h2>Progress</h2>
        <div className="bars">
          <div className="progress">
            <p>Completed</p>
            <p>{completedTasks.length}</p>
          </div>
          <div className="progress">
            <p>Uncompleted</p>
            <p>{uncompletedTasks.length}</p>
          </div>
          <div className="progress">
            <p>Overall</p>
            <p>{taskss ? taskss.length : 0}</p>
          </div>
        </div>
      </div>
      <div className="tasks">
        <div className="complete bar component">
          <h4>Uncomplete Tasks</h4>
          <div className="bottom">
            {
              uncompletedTasks.length >= 1 ? uncompletedTasks.map((item, index) => {
                return <SingleTask
                  key={index}
                  backgroundColor={item.color}
                  header={item.header}
                  context={item.context}
                  id={item._id}
                  status={item.status} />
              }) : <p>No uncomplete tasks</p>
            }
          </div>
        </div>
        <div className="uncomplete bar component">
          <h4>Complete Tasks</h4>
          <div className="bottom">
            {
              completedTasks.length >= 1 ? completedTasks.map((item, index) => {
                return <SingleTask
                  key={index}
                  backgroundColor={item.color}
                  header={item.header}
                  context={item.context}
                  id={item._id}
                  status={item.status} />
              }) : <p>No complete tasks</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage