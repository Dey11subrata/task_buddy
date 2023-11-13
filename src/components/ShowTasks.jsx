import React from 'react'
import "./ShowTasks.css"

export const ShowTasks = ({tasksList, setTasksList, task, setTask}) => {

  const handleDelete = (id)=>{
    // console.log(id);
    // filter out the task and set new state value for tasksList
    const newTaskList = tasksList.filter((task)=> task.id !== id);
    setTasksList(newTaskList);
  }

  const handleEdit = (id)=>{
    // main purpose of this handler is to set the state task variable
    // once the task variable is set we can play around with it in our AddTask component

    // first we have to find the task in our taskList and then set its value to task
    const editTask = tasksList.find(task => task.id === id);
    console.log(editTask)
    setTask(editTask)
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
              <i className='bi bi-pencil-square' onClick={()=>handleEdit(task.id)}></i>
              <i className='bi bi-trash' onClick={()=>handleDelete(task.id)}></i>
            </li>
          ))}
        </ul>
    </section>
  )
}
