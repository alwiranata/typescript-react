import useEffectEmployess from "../api/useFetchEmployees"
import useCreateEmployee from "../api/useCreateEmployee"
import { useState } from "react"
import useDeleteEmployee from "../api/useDeleteEmployee"

const EmployeesPage = () => {
    const [inputText ,setInputText] =useState("")

    const { fetchEmployees, datas, error, loading } = useEffectEmployess()
    const { errorText , loadingInput ,handleCreateEmployee} = useCreateEmployee()
    const {deleteError ,deleteLoading ,deleteEmployee} = useDeleteEmployee()

    const handleCreateEmployees = async () => {
        await handleCreateEmployee(inputText)
        await fetchEmployees()
    }

    const handleDeleteEmployee = async (id : string) =>{
        await deleteEmployee(id)
        await fetchEmployees()
    }

    return (
        <>
            <h1>Employees Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td><button disabled={deleteLoading} onClick={() => handleDeleteEmployee(data.id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {deleteLoading && <p>Loading ...</p>}
            {deleteError && <p style={{color :"red"}}>Error </p>}
            <br />
            <input type="text" onChange={(e) => setInputText(e.target.value)}  value={inputText} />
            <button onClick={handleCreateEmployees} disabled={loadingInput}>Create Name</button>
            {loadingInput && <p>Loading...</p>}
            {errorText && <p style={{color : "red"}}>{errorText}</p>}
            <br />
            <button disabled={loading} onClick={fetchEmployees}>Click</button>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </>
    )
}

export default EmployeesPage