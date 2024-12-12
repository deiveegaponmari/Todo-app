export default function Card({name,Description, data, handlechange}) {
    return (
    <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-between">
                        <div><h1>My Todos</h1></div>
                        <div>
                            <h1>Status Filter:
                                <div className="btn-group">
                                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Completed</a></li>
                                        <li><a className="dropdown-item" href="#">Not completed</a></li>
                                    </ul>
                                </div></h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card bg-info-subtle p-2">
                                <div className="card-body">
                                    <p className="h5">Name:{name}</p>
                                    <p className="h5">Description:{Description}</p>
                                    <p className="h5">Status:</p>
                                    <div className="btn-group gap-4">
                                    <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                       Not completed
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Completed</a></li>
                                        <li><a className="dropdown-item" href="#">Not completed</a></li>
                                    </ul>
                                </div>
                                    <button type="button" className="btn btn-success ">Edit</button>
                                    <button type="button" className="btn btn-warning">Delete</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}