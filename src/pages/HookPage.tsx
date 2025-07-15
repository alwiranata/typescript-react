import { useForm } from "react-hook-form"

const  HookPage = () => {
    const form = useForm()
    const handleSubmit = () => {

    }
    return(
        <>
        <h1>Hook Page</h1>

        <form action="" style={{display :"flex", flexDirection:"column", gap : "20px"}} >
            <label >
                Username :
                <input type="text" {...form.register("username")}  />
            </label>
            <label >
                Password : 
                <input type="text" {...form.register("password")}/>
            </label>
        </form>
        </>
    )
}

export default HookPage