import React from 'react'
import "./AddTask.css"

export const AddTask = ({tasksList, setTasksList}) => {
  const handleSubmit = (e)=>{
    e.preventDefault();
    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTasksList([...tasksList, newTask]);
    e.target.task.value = ""
  }
  return (
    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='add task' name='task' autoComplete='off'  />
            <button type='submit'>ADD</button>
        </form>
    </section>
  )
}
