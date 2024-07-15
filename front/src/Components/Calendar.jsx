import React, { useContext, useEffect, useState } from 'react';
import '../css/Calendar.scss';
import { TaskContext } from '../providers/TaskProvider';
import { TbFlame, TbTrash, TbTag, TbCheck, TbClock, TbX } from 'react-icons/tb';

function Calendar() {
  const { selectedTaskId } = useContext(TaskContext);
  const [task, setTask] = useState('')
  const [header, setHeader] = useState()
  const [context, setContext] = useState()
  const [color, setColor] = useState()
  const [priority, setPriority] = useState()
  const [status, setStatus] = useState()
  const [showDropdown, setShowDropdown] = useState(false);

  const GetTask = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_PATH}tasks/getTask`, {
      method: 'POST',
      body: JSON.stringify({
        _id: selectedTaskId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json();

    setHeader(data.header)
    setContext(data.context)
    setColor(data.color)
    setStatus(data.status)

    console.log(data);

    setTask(data)
  }

  const updateTask = async () => {
    if (header && header !== '') {
      const response = await fetch(`${process.env.REACT_APP_API_PATH}tasks/updateTask`, {
        method: 'POST',
        body: JSON.stringify({
          _id: selectedTaskId,
          header: header,
          context: context,
          color: color,
          status: status,
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })

      const data = await response.json();

      window.location.href = '/'

      console.log(data);
    } else {
      alert('Header is required...')
    }
  }

  const toggleDropdown = (e) => {
    e.stopPropagation()
    setShowDropdown(!showDropdown);
  };

  const deleteTask = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_PATH}tasks/deleteTask`, {
      method: 'POST',
      body: JSON.stringify({
        _id: selectedTaskId,
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })

    window.location.href = '/'
  }

  useEffect(() => {
    if (selectedTaskId && selectedTaskId !== '') {
      GetTask()
    }
  }, [selectedTaskId]);

  return (
    <div className='Calendar'>
      {selectedTaskId !== '' ? <>
        <div className="top">
          <div onClick={(e) => toggleDropdown(e)} className="circle">
            {status === 'completed' && <TbCheck />}
            {status === 'pending' && <TbClock />}
            {status === 'canceled' && <TbX />}
            {showDropdown && <select onClick={e => e.stopPropagation()} value={status} onChange={e => setStatus(e.target.value)}>
              <option value="uncompleted">Uncompleted</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="canceled">Cancel</option>
            </select>
            }
          </div>
          <TbFlame />
        </div>
        <div className="middle">
          <textarea
            spellCheck="false"
            rows={1}
            value={header}
            onChange={e => setHeader(e.target.value)}
            placeholder='Type Something ... '
          ></textarea>
          <textarea
            spellCheck="false"
            rows={1}
            value={context}
            onChange={e => setContext(e.target.value)}
            placeholder='Type...'
          ></textarea>
        </div>
        <div className="bottom">
          <div className="icons">
            <TbTag />
            <TbTrash onClick={deleteTask} />
          </div>
          <button onClick={updateTask}>save</button>
        </div>
      </> : <div className='box'>No task selected</div>}
    </div>
  );
}

export default Calendar;
