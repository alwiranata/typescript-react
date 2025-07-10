import { useState } from "react"

const  useCounter  = () => {
    const [counter ,setCounter] = useState<number>(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement =() => {
        setCounter(counter -1)
    }

    const handleReset = () => {
        setCounter(0)
    }

    return {
        counter,
        handleIncrement,
        handleDecrement,
        handleReset
    }
}

export default useCounter