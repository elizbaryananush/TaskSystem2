import React, { useContext, useEffect, useState } from 'react';
import '../css/Calendar.scss';
import '../css/HashtagWindow.scss'
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
  const [display, setDisplay] = useState('none')
  const [hashtags, setHashtags] = useState([])
  const [hashtag, setHashtag] = useState('')

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
    setHashtags(data.hashtags)

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
          status: status,
          color: color,
          hashtags: hashtags,
        }),
        headers: {
          'Content-type': 'application/json'
        }
      })

      const data = await response.json();

      window.location.href = '/'

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

  const addHashtags = (e) => {
    e.preventDefault();
    setHashtags([...hashtags, hashtag])
    setHashtag('')
  }

  const deleteHashtag = (indexNum) => {
    setHashtags(hashtags.filter((item, index) => index !== indexNum));
  }

  useEffect(() => {
    if (selectedTaskId && selectedTaskId !== '') {
      GetTask()
    }
  }, [selectedTaskId]);

  return (
    <div className='Calendar'>
      {selectedTaskId !== '' ? <>
        <div style={{ display: display }} className="hashtagWindow">
          <div className="topPart">
            <form>
              <input
                value={hashtag}
                onChange={e => setHashtag(e.target.value)}
                placeholder="hashtags..."
                type="text"
              />
              <button onClick={(e) => addHashtags(e)}>ok</button>
            </form>
            <div className="hashtags">
              {
                hashtags ? <div className="allhashtags">
                  {
                    hashtags.map((item, index) => {
                      return <div key={index} className="single">
                        <p>{item}</p>
                        <svg onClick={() => deleteHashtag(index)} xmlns="http://www.w3.org/2000/svg"
                          id="Outline" viewBox="0 0 24 24" width="512" height="512">
                          <path
                            d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
                        </svg>
                      </div>
                    })
                  }

                </div> : <div className="nohashtags">
                  <p>No hashtags yet</p>
                </div>
              }
            </div>
          </div>
          <button className="submit" onClick={() => setDisplay('none')}> Submit</button >
        </div>
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
          <div className="hashtags">
            {
              display === 'none' && hashtags && hashtags.map((item, index) => {
                return <p key={index}>{item}</p>
              })
            }
          </div>
        </div>
        <div className="bottom">
          <div className="icons">
            <TbTag onClick={() => display === 'none' ? setDisplay('flex') : setDisplay('none')} />
            <TbTrash onClick={deleteTask} />
          </div>
          <button onClick={updateTask}>save</button>
        </div>
      </> : <div className='box'>No task selected</div>}
    </div>
  );
}

export default Calendar;
