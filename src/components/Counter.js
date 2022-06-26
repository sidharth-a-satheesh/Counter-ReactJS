import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = React.useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    return (
        <div className='counter'>
            <div className='count'>
                <h1>{count}</h1>
            </div>
            <div className="buttons">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
            
        </div>
    )
}

export default Counter