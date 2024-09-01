import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Child from "./components/child.jsx";

function App() {
  const [count, setCount] = useState(0)

    // let count = 1
    // const onAdd = () => {
    //   if (count>= 20) return
    //   setCount((prev)=>prev + 1)
    //   setCount((prev) =>prev + 1)
    //   setCount((prev) =>prev + 1)
    // }
    // const onDecrease = () => {
    //   if (count <= 0) return
    //   setCount(count - 1)
    // }

    const [bgColor, setColor] = useState('pink')

  return (
      <div>
          {/*count:{count}*/}
          {/*<button onClick={onAdd}>*/}
          {/*    increase {count}*/}
          {/*</button>*/}
          {/*<button onClick={onDecrease}>*/}
          {/*    decrease {count}*/}
          {/*</button>*/}

          {/*<div className='bg-pink-400'>*/}
          {/*    hello*/}
          {/*</div>*/}

          {/*<Child name='vikash' age='33' />*/}
          <div style={{height: '100vh', width: '100vw', backgroundColor: bgColor}}>

          </div>

          <div className='mx-3'>
              <div className='fixed bottom-14 bg-amber-50 flex flex-wrap gap-3 w-full items-center justify-center py-1 left-3 right-3 rounded-3xl'>

                  <div>
                      <button className='outline rounded-xl bg-red-500 text-white px-2 py-1' onClick={() => {
                          setColor('red')
                      }}>

                          red
                      </button>
                  </div>
                  <div>
                      <button className='outline rounded-xl bg-green-400 text-white px-2 py-1' onClick={() => {
                          setColor('green')
                      }}>

                          green
                      </button>
                  </div>

                  <div>
                      <button className='outline rounded-xl bg-blue-400 text-white px-2 py-1' onClick={() => {
                          setColor('blue')
                      }}>

                          blue
                      </button>
                  </div>
              </div>
          </div>


      </div>
  )
}

export default App
