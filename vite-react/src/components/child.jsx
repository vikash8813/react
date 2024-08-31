import React from 'react';

function Child({name,age = 23}) {
    return (
        <div>
            {name}
            age: {age}
        </div>
    );
}

export default Child;
