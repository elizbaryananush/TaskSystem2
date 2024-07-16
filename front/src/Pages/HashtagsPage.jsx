import React, { useEffect, useState } from 'react'
import '../css/HashtagsPage.scss'
import SingleTask from '../Components/SingleTask'

function HashtagsPage() {
  const _id = localStorage.getItem('_id')
  const [allData, setAllData] = useState([])
  const [hashtags, setHashtags] = useState([]);
  const [dataByHashtag, setDataByHashtag] = useState([])
  const [activeHashtag, setActiveHashtag] = useState()

  const getAllData = async () => {
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

    const allHashtags = data.reduce((acc, item) => {
      return acc.concat(item.hashtags);
    }, []);

    const uniqueHashtagsSet = new Set(allHashtags);

    const thisArray = new Array([...uniqueHashtagsSet])

    setHashtags(thisArray[0])

    setActiveHashtag(thisArray[0][0])

    setAllData(data)
  }

  useEffect(() => {
    getAllData()
  }, [])

  useEffect(() => {
    const filteredData = allData.filter(item => item.hashtags.includes(activeHashtag));

    setDataByHashtag(filteredData)
  }, [activeHashtag])

  return (
    <div className='HashtagsPage'>
      {hashtags.length > 0 ? <ul className="top">
        {
          hashtags && activeHashtag && hashtags.map((item, index) => {
            return <li onClick={() => setActiveHashtag(item)} className={activeHashtag === item ? 'active' : null} key={index}>{item}</li>
          })
        }
      </ul> : null}
      {
        hashtags.length > 0 ? <div className="bottom">
          {
            dataByHashtag && dataByHashtag.map((item, index) => {
              return <SingleTask
                key={index}
                backgroundColor={item.color}
                header={item.header}
                context={item.context}
                id={item._id}
                status={item.status} />
            })
          }
        </div> : <div className="noStatus">
          <p>No Hashtags</p>
        </div>
      }
    </div>
  )
}

export default HashtagsPage