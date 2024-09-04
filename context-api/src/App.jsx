import { useState,createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Child from "./components/child.jsx";
import UserContextProvider from "./components/userContextProvider.jsx";

// export const CountContext = createContext()
function App() {
  const [count, setCount] = useState(0)


  return (
      <>
          {/*<CountContext.Provider value={{count,setCount}}>*/}
          {/*    {count}*/}
          {/*    <Child/>*/}
          {/*</CountContext.Provider>*/}

          <UserContextProvider>
              <Child/>
          </UserContextProvider>
      </>
  )
}

export default App
