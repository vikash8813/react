import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from "./components/child.jsx";

function App() {
  const [count, setCount] = useState(0)

    // let count = 1
    const onAdd = () => {
      if (count>= 20) return
      setCount(count + 1)
    }
    const onDecrease = () => {
      if (count <= 0) return
      setCount(count - 1)
    }

  return (
      <div>
          {/*count:{count}*/}
          {/*<button onClick={onAdd}>*/}
          {/*    increase {count}*/}
          {/*</button>*/}
          {/*<button onClick={onDecrease}>*/}
          {/*    decrease {count}*/}
          {/*</button>*/}

          <div className='bg-pink-400'>
              hello
          </div>

          <Child name='vikash' age='33' />
      </div>
  )
}

export default App
