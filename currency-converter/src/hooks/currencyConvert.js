import {useEffect, useState} from "react";

const currencyConvertHook = (currency)=>{
    const [data,setData] = useState()

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then(r => r.json()).then(r => setData(r[currency]))
    },[currency])


    console.warn(data)
    return data
}

export default currencyConvertHook