import React, {useEffect, useState} from 'react';
import {Link, useLoaderData, useRouteLoaderData} from "react-router-dom";

function Home() {
    // const [user,setUser] = useState()

    const user = useLoaderData()

    // useEffect(()=> {
    //      fetch('https://api.github.com/users/vikash8813').then(r => r.json()).then(r => setUser(r))
    //
    // }, [])
    return (
        <div>
            this is home page
            {/*{user?.avatar_url}*/}

            <img
                src={user?.avatar_url}
            />
        </div>
    );
}

export default Home;

export const fetchUser =async () =>{
    const res = await fetch('https://api.github.com/users/vikash8813')
    console.warn(res)
    return res
}