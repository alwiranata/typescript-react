import { useState } from "react"
import { axiosInstance } from "../lib/axios"

type EmployeesResponse = {
    id: string
    name: string
}


const useEffectEmployess = () => {
    const [employees, setEmployees] = useState<EmployeesResponse[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const fetchEmployees = async () => {
        try {
            setLoading(true)

            // const response = await fetch("http://localhost:3000/employees", {
            //     method: "GET"
            // })
            // const responseJson = await response.json() as EmployeesResponse[];
            const response = await axiosInstance.get<EmployeesResponse[]>(
                "/employees"
            )
            setEmployees(response.data)
        } catch (error) {
            setError((error as TypeError).message)
        } finally {
            setLoading(false)
        }
    }
    return {
        fetchEmployees,
        datas: employees,
        loading,
        error
    }
}

export default useEffectEmployess