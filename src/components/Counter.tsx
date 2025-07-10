import useCounter from "../hooks/useCounter"

const Counter = () => {
   const {counter ,handleIncrement,handleDecrement ,handleReset} = useCounter()

    return (
        <>   
        <button className="container"  >
            <span className="block" onClick={handleIncrement}>+</span>
            <span className="block">{counter}</span>
            <span className = "block" onClick={handleDecrement}>-</span>
            <span className="block" onClick={handleReset}>Reset</span>
        </button>
        </>
    )
}

export default Counter