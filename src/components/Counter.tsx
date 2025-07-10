import { useState } from "react"



const Counter = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        // alert("Increment")
        setCount(count + 1)
    }

    const handleDecrement = () => {
        // alert("Decrement")
        setCount(count - 1)
    }

    return (
        <>   
        <div className="container">
            <span className="block" onClick={handleIncrement}>+</span>
            <span className="block">{count}</span>
            <span className = "block" onClick={handleDecrement}>-</span>
        </div>
        </>
    )
}

export default Counter