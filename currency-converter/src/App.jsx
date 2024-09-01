import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputBox from "./InputBox.jsx";
import currencyConvertHook from "./hooks/currencyConvert.js";

function App() {
  const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to,setTo] = useState('inr')
    const [convertAmount , setConvertAmount] = useState(0)


    const onAmountChange = (a) => {
        setAmount(a)
    }
    const onCurrencyChange = (a) => {
        setFrom(a)
    }

    const currencyConvertHook1 = currencyConvertHook(from)
    console.warn(currencyConvertHook1)

    const currencies = currencyConvertHook1 ? Object.keys(currencyConvertHook1) : []

    const toCurrencyChange = (c) =>{
      setTo(c)
    }

    const swap = () =>{
      setTo(from)
        setFrom(to)
    }


    const convert = () => {

      setConvertAmount(currencyConvertHook1[to] * amount)
    }


  return (
      <div>
          <div className='max-w-sm text-center'>
              <InputBox name='From' amount={amount} availableCurrency={currencies} currency={from}
                        onAmountChange={onAmountChange} onCurrencyChange={onCurrencyChange}/>

              <button className='bg-blue-500 text-white px-2 py-1 rounded-xl my-4' onClick={swap}>
                  Swap
              </button>

              <InputBox name='To' amount={convertAmount} availableCurrency={currencies} currency={to}
                        onCurrencyChange={toCurrencyChange} />

              <button className='bg-blue-500 text-white px-2 py-1 rounded-xl my-4' onClick={convert}>
                  convert {from} to {to}
              </button>
          </div>
      </div>
  )
}

export default App
