import React from 'react'
import "./ShowTasks.css"

export const ShowTasks = () => {
  const tasks = [
    {
      id: 1001,
      name: "Task A",
      time: new Date()
    },
    {
      id: 1002,
      name: "Task B",
      time: new Date()
    },
    {
      id: 1003,
      name: "Task C",
      time: new Date()
    },
    {
      id: 1004,
      name: "Task D ",
      time: new Date()
    },
  ]
  return (
    <section className='showTask'>
        <div className='head'>
            <div>
                <span className='title'>Todo</span>
                <span className='count'>0</span>
            </div>
            <button className='clearAll'>Clear All</button>
        </div>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
            <p>
              <span className='name'>{task.name}</span>
              <span></span>
            </p>
            <i className='bi bi-pencil-square'></i>
            <i className='bi bi-trash'></i>
            {/* <p>{task.time}</p> */}
            </li>
          ))}
        </ul>
    </section>
  )
}
