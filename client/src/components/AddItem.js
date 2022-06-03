import React,{useState} from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddItem(){

    const [code, setCode] = useState();
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [quentity, setQuentity] = useState();
    const [type, setType] = useState("");
    const [price, setPrice] = useState();

    function sendData(e){
        e.preventDefault();
        //alert("Insert");

        const newItem = {
            code,
            name,
            category,
            quentity,
            type,
            price
        }
        // console.log(newItem);

        axios.post("http://localhost:5000/api/store/add",newItem)
        .then(() => {
          alert('Item data inserted successfully')
        })
        .catch(error => {
            alert(error.message);
        })

    }


    return(
        <div className="container">
             <h3> Add Evaluation </h3>
            <form onSubmit={sendData}>
  <div className="mb-3">
    <label for="code" className="form-label">ID</label>
    <input type="number" className="form-control" id="code" placeholder="Enter ID" 
    onChange = {(e) =>{
        setCode(e.target.value);
    }}  />
  </div>

  <div className="mb-3">
    <label for="name" className="form-label">Panel Member Name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter Panel Member Name" 
    onChange = {(e) =>{
        setName(e.target.value);
    }}  />
  </div>

  <div className="mb-3">
    <label for="category" className="form-label">Project Group ID</label>
    <input type="text" className="form-control" id="category" placeholder="Enter Project Group ID" 
    onChange = {(e) =>{
        setCategory(e.target.value);
    }}  />
  </div>

  <div className="mb-3">
    <label for="quentity" className="form-label">Marks For Topic</label>
    <input type="number" className="form-control" id="quentity" placeholder="Enter Marks For Topic" 
    onChange = {(e) =>{
        setQuentity(e.target.value);
    }}  />
  </div>


  <div className="mb-3">
    <label for="type" className="form-label">Feedback</label>
    <input type="text" className="form-control" id="typr"  placeholder="Enter Feedback" 
    onChange = {(e) =>{
        setType(e.target.value);
    }}  />
  </div>

  <div className="mb-3">
    <label for="price" className="form-label">Marks For Presentation</label>
    <input type="number" className="form-control" id="price" placeholder="Enter Marks For Presentation" 
    onChange = {(e) =>{
        setPrice(e.target.value);
    }}  />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>

        
    )
}