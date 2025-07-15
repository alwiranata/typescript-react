import { useState } from "react"
const FormPage = () => {
    // const inputUsername = useRef<HTMLInputElement>(null)
    // const inputEmail = useRef<HTMLInputElement>(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    // const [erorrUsername, setErrorUsername] = useState("")
    // const [erorrEmail, setErrorEmail] = useState("")
    // const handleSubmit = () => {

    //     const userNameValidate = username.length < 5
    //     const emailValidate = email.length < 7

    //     if (userNameValidate) {
    //         setErrorUsername("Usernamer must be  at leats 5 character")
    //     }

    //     if (emailValidate) {
    //         setErrorEmail("email must bea at least 7 character")
    //     }
    //     // const username = inputUsername.current?.value
    //     // const email = inputEmail.current?.value
    //     // alert(`Username  :${username} & Email : ${email}` )
    // }
    return (
        <>
            <div>Form Page</div>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} value={username}/>
                {/* <p style={{color : "red"}}>{erorrUsername}</p> */}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                {/* <p style={{color : "red"}}>{erorrEmail}</p> */}
            </div>
        </>
    )
}

export default FormPage