import React from "react";
export default function Form({name,detail,handleName,handleDetail,handleChange}) {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="form-header text-center text-success p-3">My Todo</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" value={name} onChange={handleName}
                        placeholder="Todo Name" aria-label="Todo Name" aria-describedby="addon-wrapping" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" onChange={handleDetail} value={detail}
                        placeholder="Todo Description" aria-label="Todo Description" aria-describedby="addon-wrapping" />
                </div>
                <div className="col">
                    <button type="button" onClick={handleChange} className="btn btn-primary">Add Todo</button>
            
                </div>
            </div>
           {/*  <div className="row">
                {
                    data.length > 0 && (
                        <Card data={data} />
                    )
                }

            </div> */}
        </div>

    )
}