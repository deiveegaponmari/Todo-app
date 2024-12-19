export default function Card({ data, handleEdit, handleDelete, handleStatusChange, handleFilterChange }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-between">
                    <div><h1>My Todos</h1></div>
                    <div>
                        <h1>Status Filter:
                            <div className="btn-group">
                                <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Filter
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" onClick={() => { handleFilterChange("All") }} href="#">All</a></li>
                                    <li><a className="dropdown-item" onClick={() => { handleFilterChange("Completed") }} href="#">Completed</a></li>
                                    <li><a className="dropdown-item" onClick={() => { handleFilterChange("Not completed") }} href="#">Not completed</a></li>
                                </ul>
                            </div></h1>
                    </div>
                </div>
            </div>
            <div className="row">
                {data.map((todo, index) => {
                    return <div className="col-lg-4" key={index}>
                        <div className="card bg-info-subtle p-2">
                            <div className="card-body">
                                <p className="h5">Name:{todo.name}</p>
                                <p className="h5">Description:{todo.detail}</p>
                                <div className="d-flex gap-2">
                                    <p className="h5">Status:</p>
                                    <div className="btn-group ">
                                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            {todo.status}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" onClick={() => handleStatusChange(index, "Completed")} href="#">Completed</a></li>
                                            <li><a className="dropdown-item" onClick={() => handleStatusChange(index, "Not completed")} href="#">Not completed</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end">
                                    <button type="button" className="btn btn-success me-2" onClick={() => {
                                        const newName = prompt("Enter new name", todo.name);
                                        const newDetail = prompt("Enter new description", todo.detail);
                                        if (newName && newDetail) handleEdit(index, newName, newDetail);
                                    }} >
                                        Edit</button>
                                    <button type="button" className="btn btn-warning" onClick={() => handleDelete(index)}>Delete</button>
                                </div>

                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>

    )
}