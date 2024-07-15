import React, { useEffect, useState } from 'react'
import '../css/PendingPage.scss'
import SingleTask from '../Components/SingleTask';

function CanceledPage() {
    const _id = localStorage.getItem('_id');
    const [tasks, setTasks] = useState([]);

    const getData = async () => {
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

        const filteredData = data.filter(item => item.status == 'canceled')

        setTasks(filteredData)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="StatusPage">
            <div className="box">
                {
                    tasks.length > 0 ? tasks.map((item, index) => {
                        return <SingleTask
                            key={index}
                            backgroundColor={item.color}
                            header={item.header}
                            context={item.context}
                            id={item._id}
                            status={item.status} />

                    }) : <div>
                        <p className='noThisStatus'>No canceled status tasks</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default CanceledPage