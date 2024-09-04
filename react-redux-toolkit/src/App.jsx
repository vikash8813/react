import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "./features/todoSlices.js";

function App() {
  const [count, setCount] = useState(0)

    const dispatch = useDispatch()

    const todos = useSelector(state => state.todos)

    const onAddTodo = () => {
      dispatch(addTodo('this is a todo'))
    }

  return (
      <div>
          {
              todos.map(t => (
                  <div key={t.id}>
                      {t.id} - {t.title}
                  </div>
              ))
          }

          <button
              onClick={onAddTodo}
          >
              add
          </button>
      </div>
  )
}

export default App
