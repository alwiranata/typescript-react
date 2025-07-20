import { useState } from "react"
import { axiosInstance } from "../lib/axios"

const useDeleteEmployee = () => {
     const [deleteError , setDeleteError] = useState("")
    const [deleteLoading , setDeleteLoading] = useState(false)
    const deleteEmployee = async (employeeId: string ) => {
        try {
            setDeleteLoading(true)
            await axiosInstance.delete(`/employees/${employeeId}`)
        } catch (error) {
            setDeleteError((error as TypeError).message)
        } finally {
            setDeleteLoading(false)
        }
    }
    return{
        deleteError,
        deleteLoading,
        deleteEmployee
    }
}

export default useDeleteEmployee