
import { useState, type ReactNode } from 'react'


type User = {
  email: string,
  password: string
}

type ButtonProps = {
  className?: string
  onClick: () => void
  children: ReactNode
}

const Button = (props: ButtonProps) => {
  return (
    <>
      <button className={props.className} onClick={props.onClick}>
        {props.children}
      </button>
    </>
  )
}



function App() {
  const [count, setCount] = useState<number>(0)
  const [user, setUser] = useState<User>()
  const [text,setText] = useState<number>(0)

  const handleCount = () => {
    setCount(count + 1)
  }

  const handleUser = () => {
    setUser({
      email: "aldowiranata@gmail.com",
      password: "12345678"
    })
  }

  const handleText : React.ChangeEventHandler<HTMLInputElement>= (event) => {
   const value = event.target.valueAsNumber
   if(!isNaN(value)){
    setText(value)
   }else{
    setText(0)
   }
  }

  return (
    <>
      <button onClick={handleCount} style={{ margin: "10px" }}>Count + 1</button>
      <button onClick={handleUser} style={{ margin: "10px" }}>Click</button>
      <p>Count    : {count}</p>
      <p>Email    : {user?.email}</p>
      <p>Password : {user?.password}</p>

      <input onChange={handleText} type='number' />
      <div>{text}</div>
      <Button onClick={() => { console.log("aldo") }} className="p">
        Klik
      </Button>

    </>
  )
}

export default App
