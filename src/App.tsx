
import { useState } from 'react'
import './App.css'


type User = {
  email : string,
  password : string
}

function App() {
  const [count , setCount] = useState<number>(0)
  const [user ,setUser] = useState<User>()


  const handleCount = () => {
    setCount(count + 1)
  }

  const handleUser =  () => {
    setUser ({
      email : "aldowiranata@gmail.com",
      password : "12345678"
    })
  }

  
  return(
    <>
      <button onClick={handleCount} style={{margin : "10px"}}>Count + 1</button>
      <button onClick={handleUser}  style={{margin : "10px"}}>Click</button>
      <p>Count    : {count}</p>
      <p>Email    : {user?.email}</p>
      <p>Password : {user?.password}</p>

    </>
  )
}

export default App
