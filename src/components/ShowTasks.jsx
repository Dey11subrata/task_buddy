import React from 'react'
import "./ShowTasks.css"

export const ShowTasks = ({tasksList, setTasksList, task, setTask}) => {

  const handleDelete = (id)=>{
    // console.log(id);
    // filter out the task and set new state value for tasksList
    const newTaskList = tasksList.filter((task)=> task.id !== id);
    setTasksList(newTaskList);
  }
    return (
    <section className='showTask'>
        <div className='head'>
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{tasksList.length}</span>
            </div>
            <button className='clearAll' onClick={()=>setTasksList([])}>Clear All</button>
        </div>
        <ul>
          {tasksList.map(task => (
              <li key={task.id}>
              <p>
                <span className='name'>{task.name}</span>
                <span className='time'>{task.time}</span>
              </p>
              <i className='bi bi-pencil-square'></i>
              <i className='bi bi-trash' onClick={()=>handleDelete(task.id)}></i>
            </li>
          ))}
        </ul>
    </section>
  )
}
