import React from 'react';
import userContext from "./userContext.js";

function Child() {
const {count,setCount} = React.useContext(userContext)
    return (
        <div>
            this is child {count}

            <button
                onClick={()=>(setCount(4))}
            >
                click
            </button>
        </div>
    );
}

export default Child;