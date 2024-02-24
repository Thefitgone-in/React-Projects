import { useState } from 'react'
import Todos from './components/Todos'
import './App.css'
import AddTodo from './components/AddTodo'

function App() {
 

  return (
    <>
      <h1 className='bg-gray-800 py-4 text-white text-3xl font-extrabold rounded-md'>Your Todo App</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
