import { useState } from "react"
import { axiosInstance } from "../lib/axios"
import {  z } from "zod"

const inputTexts = z.object({
    name: z.string().min(3 ,{message : "Name must be at least 3 characters long"})
})

const useCreateEmployee = () =>{
        const [errorText , setErrorText] = useState("")
        const [loadingInput , setLoadingInput] = useState(false)
        // json-server mock-db.json -p 3000
        const handleCreateEmployee = async (payload  : string ) => {
            const result = inputTexts.safeParse({name :payload})

            if(!result.success){
                setErrorText(result.error.issues[0].message)
                return
            }

            try {
                setLoadingInput(true)
                await axiosInstance.post("/employees", {
                    name : payload
                })

            } catch (error) {
                setErrorText((error as TypeError).message)
            } finally{
                setLoadingInput(false)
            }
        }
        return{
            errorText,
            loadingInput,
            handleCreateEmployee,
        }
}

export default useCreateEmployee