import {useContext, useState} from 'react'
import UserContext from "./userContext.js";


function UserContextProvider({children}) {
    const [count,setCount] = useState(1)
    return (
    <UserContext.Provider value={{count,setCount}}>
        {children}
    </UserContext.Provider>
    );
}

export default UserContextProvider;