import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/Createtodo'
import { Todos } from './components/Todos'
function App() {
  const [todos , settodos] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(function(response){
    response.json(function(data){
      settodos(data.todos)
    })
  })

  return (
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos = {todos}></Todos>
      </div>

  )
}

export default App
