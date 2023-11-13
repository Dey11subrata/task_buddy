import React from 'react'
import "./AddTask.css"

export const AddTask = ({tasksList, setTasksList, task, setTask}) => {

  const handleSubmit = (e)=>{
    e.preventDefault();
    const date = new Date()
    if(task.id){
      // if there is a taks available in the task variable edit the task value and set it into the taskList
    const updatedTask = tasksList.map(todo=>(
      todo.id === task.id ? {id: task.id, name: task.name, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}: {id: todo.id, name: todo.name, time: todo.time}
    ))

    setTasksList(updatedTask)
      // reset value of task
      setTask({})
    }
    else{
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTasksList([...tasksList, newTask]);
      setTask({})


    }
 ;
  }
  return (
    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setTask({...task, name: e.target.value})} value = {task.name || ""} placeholder='add task' name='task' autoComplete='off'  />
            <button type='submit'>{task.id?"Update": "ADD"}</button>
        </form>
    </section>
  )
}
