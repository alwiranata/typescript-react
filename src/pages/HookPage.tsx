import { useForm } from "react-hook-form"
import z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

// type Values = {
//     username : string
//     password : string
// }


const registerFormSchema = z.object({
    username : z.string().min(3, {message : "Minimla 3 karakter"}).max(10 ,{message : "Maximal 10 karakter"}),
    password : z.string().max(10, {message : "Maximal 10 Karakter"}),
    age :  z.coerce.number().min(18 ,{message : "Umur harus 18"}),
})
type RegisterFormSchema = z.infer<typeof registerFormSchema>

const  HookPage = () => {
    const form = useForm <RegisterFormSchema>({
        resolver : zodResolver(registerFormSchema)
    })

    const Submit = (values  : RegisterFormSchema ) => {
        alert("User Submited" )
        console.log(values)
    }
    return(
        <>
        <h1>Hook Page</h1>
        <form onSubmit={form.handleSubmit(Submit)} style={{display :"flex", flexDirection:"column", gap : "20px"}} >
            <label >
                Username :
                <input type="text" {...form.register("username")}  />
            </label>
            <span style={{color : "red"}}>{form.formState.errors.username?.message}</span>
            <label >
                Password : 
                <input type="text" {...form.register("password")}/>
            </label>
            <span style={{color : "red"}}>{form.formState.errors.password?.message}</span>
            <label >
                Age :
                <input type="number" {...form.register("age")} />
            </label>
            <span style={{color : "red"}}>{form.formState.errors.age?.message}</span>

            <button style={{width : "fit-content"}}>Submit</button>
        </form>
        </>
    )
}

export default HookPage