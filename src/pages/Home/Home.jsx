import { useState } from "react";
import Form from "../../components/Form/Form";
import Card from "../../components/TodoCard/Card";
export default function Home(){
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("All");
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
            detail,
            status:"Not completed"
        })
        console.log(datacopy);
        setData(datacopy)
        setName("");
        setDetail("");

    }
    function handleEdit(index, newName, newDetail) {
        const updatedData = [...data];
        updatedData[index] = { ...updatedData[index], name: newName, detail: newDetail };
        setData(updatedData);
    }
    function handleDelete(index) {
        setData(data.filter((_, i) => i !== index));
    }
    function handleStatusChange(index, newStatus) {
        const updatedData = [...data];
        updatedData[index].status = newStatus;
        setData(updatedData);
    }
    function handleFilterChange(newFilter) {
        setFilter(newFilter);
    }
    const filteredData =
    filter === "All" ? data : data.filter((todo) => todo.status === filter);    
    return (
       
        <div className='container'>
        <Form name={name} detail={detail}
        handleName={handleName} handleDetail={handleDetail} handleChange={handleChange}/>
        {data.length >0 
        ? <Card   data={filteredData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleStatusChange={handleStatusChange}
        handleFilterChange={handleFilterChange}/>
        :data
        }
        
        </div>
       
    )
}