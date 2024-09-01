import {useCallback, useEffect, useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNumberInclude, setNumberInclude] = useState(true)
  const [isCharacterInclude, setCharacterInclude] = useState(true)
  const [password, setPassword] = useState('')

    const generatePassword = useCallback(()=> {
        let pass = ''
        let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

        if (isNumberInclude) str += '0123456789'
        if (isCharacterInclude) str += `!"#$%&\'()*+,-./:;<=>?@[\\]^_{|}~`

        for (let i = 0; i < length ; i++) {
            const letter = Math.floor(Math.random() * (str.length + 1))
            pass+= str.charAt(letter)
        }

        setPassword(pass)
    },[length,isNumberInclude,isCharacterInclude,setPassword])

    const passwordRef = useRef(null)

    const copyPassword = useCallback(()=>{
        passwordRef.current.select()
        // passwordRef.current.style.color= 'pink'
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{
        generatePassword()
    },[length,isNumberInclude,isCharacterInclude,setPassword])

  return (
    <>
      <div className='w-full text-white' style={{height: '100vh',backgroundColor: '#000'}}>
          <div className='max-w-screen-sm mx-auto text-center py-4'>
              <div className=''>
                  <h2 className='mb-4'>
                      Password Generator
                  </h2>

                  <div>
                  <input type='text' value={password} readOnly
                         ref={passwordRef}
                         className='outline rounded-xl mr-4 text-black px-4' />
                      <button className='bg-red-500 px-3 py-1 rounded-xl outline' onClick={copyPassword}>
                          Copy
                      </button>
                  </div>

                  <div className='flex justify-between items-center mt-4'>
                      <div>
                          <input type='range'
                                 max={100}
                                 min={8}
                                 id='range'
                                 value={length}
                                 className='mr-2'
                                 onChange={(e) => {
                                     setLength(e.target.value)
                                 }}
                          />
                          <label htmlFor='range'>
                              length {length}
                          </label>

                      </div>
                      <div>
                          <input type={'checkbox'}
                                 defaultChecked={isNumberInclude}
                                 id='numbers'
                                 className='mr-2'
                                 onChange={() => {
                                     setNumberInclude(pre => !pre)
                                 }}
                          />
                          <label htmlFor='numbers'>
                              Numbers
                          </label>

                      </div>
                      <div>
                          <input type={'checkbox'}
                                 defaultChecked={isCharacterInclude}
                                 id='characters'
                                 className='mr-2'
                                 onChange={() => {
                                     setCharacterInclude(pre => !pre)
                                 }}
                          />
                          <label htmlFor='characters'>
                              characters
                          </label>

                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
