import React from "react";
import { useState } from "react";
import Card from "../TodoCard/Card";
export default function Form() {
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [data, setdata] = useState([]);
    function handleName(e) {
        setName(e.target.value)
    }
    function handleDetail(e) {
        setDetail(e.target.value)
    }
    function handleChange(e) {
        e.preventDefault();
        if (!name || !detail) return;
        const datacopy = [...data];
        datacopy.push({
            name,
            detail
        })
        //console.log(datacopy);
        setdata(datacopy)
        setName("");
        setDetail("");

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="form-header text-center text-success p-3">My Todo</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" onChange={handleName}
                        placeholder="Todo Name" aria-label="Todo Name" aria-describedby="addon-wrapping" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" onChange={handleDetail}
                        placeholder="Todo Description" aria-label="Todo Description" aria-describedby="addon-wrapping" />
                </div>
                <div className="col">
                    <button type="button" onClick={handleChange} className="btn btn-primary">Add Todo</button>
                    <h1>Name:{name}</h1>
                </div>
            </div>
            <div className="row">
                {
                    data.length > 0 && (
                        <Card data={data} />
                    )
                }

            </div>
        </div>

    )
}