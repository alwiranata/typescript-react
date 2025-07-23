import useEffectEmployess from "../api/useFetchEmployees"
import useCreateEmployee from "../api/useCreateEmployee"
import {useState} from "react"
import useDeleteEmployee from "../api/useDeleteEmployee"
import useUpdateEmployee from "../api/useUpdateEmployee"

const EmployeesPage = () => {
	const [inputName, setInputName] = useState("")
	const [inputJob, setInputJob] = useState("")
	const [editName, setEditName] = useState("")
	const [editJob, setEditJob] = useState("")
	const [selectedEmployee, setSelectedEmployee] = useState("")

	const {loadingUpdate, updateEmployee, errorUpdate} = useUpdateEmployee()
	const {fetchEmployees, datas, error, loading} = useEffectEmployess()
	const {errorText, loadingInput, handleCreateEmployee} = useCreateEmployee()
	const {deleteError, deleteLoading, deleteEmployee} = useDeleteEmployee()

	const handleCreateEmployees = async (name: string, job: string) => {
		await handleCreateEmployee({name, job})
		await fetchEmployees()
		setInputName("")
		setInputJob("")
	}

	const handleDeleteEmployee = async (id: string) => {
		await deleteEmployee(id)
		await fetchEmployees()
	}

	const handleEditEmployee = async (name: string, job: string) => {
		if (selectedEmployee && editName) {
			await updateEmployee(selectedEmployee, {name, job})
			await fetchEmployees()
			setEditName("")
			setEditJob("")
			setSelectedEmployee("")
		}
	}

	return (
		<>
			<h1>Employees Page</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Job</th>
						<th>Action</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					{datas.map((data) => {
						return (
							<tr key={data.id}>
								<td>{data.id}</td>
								<td>{data.name}</td>
								<td>{data.job}</td>
								<td>
									<button
										disabled={deleteLoading}
										onClick={() => handleDeleteEmployee(data.id)}
									>
										Delete
									</button>
								</td>
								<td>
									<input
										checked={data.id === selectedEmployee}
										type='radio'
										name='employee-edit'
										onChange={() => {
											setSelectedEmployee(data.id)
											setEditName(data.name)
											setEditJob(data.job)
										}}
									/>
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>

			{deleteLoading && <p>Loading ...</p>}
			{deleteError && <p style={{color: "red"}}>Error </p>}

			<br />

			<input
				type='text'
				onChange={(e) => setInputName(e.target.value)}
				value={inputName}
			/>
			<input
				type='text'
				onChange={(e) => setInputJob(e.target.value)}
				value={inputJob}
			/>
			<button
				onClick={() => handleCreateEmployees(inputName, inputJob)}
				disabled={loadingInput}
			>
				Create Prodfile
			</button>
			{loadingInput && <p>Loading...</p>}
			{errorText && <p style={{color: "red"}}>{errorText}</p>}

			<br />

			<input
				type='text'
				onChange={(e) => setEditName(e.target.value)}
				value={editName}
			/>
			<input
				type='text'
				onChange={(e) => setEditJob(e.target.value)}
				value={editJob}
			/>
			<button
				disabled={loadingUpdate || !selectedEmployee}
				onClick={() => handleEditEmployee(editName, editJob)}
			>
				Edit Employee
			</button>
			{loadingUpdate && <p>Loading...</p>}
			{errorUpdate && <p style={{color: "red"}}>{errorUpdate}</p>}

			<br />

			<button
				disabled={loading}
				onClick={fetchEmployees}
			>
				Click
			</button>
			{loading && <p>Loading...</p>}
			{error && <p style={{color: "red"}}>{error}</p>}
		</>
	)
}

export default EmployeesPage
