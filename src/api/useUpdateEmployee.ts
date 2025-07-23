import {axiosInstance} from "../lib/axios"
import {useState} from "react"

type PayloadSchema = {
    name? : string,
    job? : string
}
const useUpdateEmployee = () => {
	const [loadingUpdate, setLoadingUpdate] = useState(false)
	const [errorUpdate, setErrorUpdate] = useState("")

	/*patch => hanya mengubah isinya contoh 
    {
    name: "aldo", => name :  "aldo17"
    job : "programmer" => job :"ui/ux"

    hanya mengubah value nya saja 
    }
    */
	/*put => mengubah property dan valuenya {
    name: "aldo", => useraneme : "aldo17"
    job : "programmer" => profesi : "ui/ux"

    hanya mengubahproperty dan value nya 
    }*/

	const updateEmployee = async (employeeId: string, payload:PayloadSchema) => {
		try {
			setLoadingUpdate(true)
			await axiosInstance.put(`/employees/${employeeId}`, {
				name: payload.name ? payload.name : undefined,
                job: payload.job ? payload.job : undefined
			})
		} catch (error) {
			setErrorUpdate((error as TypeError).message)
		} finally {
			setLoadingUpdate(false)
		}
	}
	return {
		loadingUpdate,
		errorUpdate,
		updateEmployee,
	}
}

export default useUpdateEmployee
