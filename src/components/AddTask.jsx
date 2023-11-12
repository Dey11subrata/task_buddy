import React from 'react'
import "./AddTask.css"

export const AddTask = () => {
  return (
    <section className='addTask'>
        <form >
            <input type="text" placeholder='add task' name='task' autoComplete='off'  />
            <button type='submit'>ADD</button>
        </form>
    </section>
  )
}
