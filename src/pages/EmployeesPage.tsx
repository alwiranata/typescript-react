import { useState } from "react";

type Employees = {
    id: number
    name: string
}



const EmployeesPage = () => {
    const [employees, setEmployees] = useState<Employees[]>([])
    const [ loading , setLoading] = useState(false)
    const fetchEmployees = async () => {
        try {
            setLoading(true)
            
            const response = await fetch("http://localhost:3000/employees", {
                method: "GET"
            })
            const responseJson = await response.json() as Employees[];

            setEmployees(responseJson)

        } catch (error) {
            alert("Gaggal Mengambil data Employess")
        } finally {
            setLoading(false)
        }
    }
    // json-server mock-db.json -p 3000

    return (
        <>
            <h1>Employees Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee) => {
                            return (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
            <button disabled={loading} onClick={fetchEmployees}>Click</button>
            {loading && <p>Loading...</p>}
        </>
    )
}

export default EmployeesPage