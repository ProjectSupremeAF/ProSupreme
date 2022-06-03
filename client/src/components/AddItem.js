import React,{useState} from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddItem(){

    const [code, setCode] = useState();
    const [name, setName] = useState("");
    const [group, setGroup] = useState("");
    const [topic, setTopic] = useState();
    const [feedback, setFeedback] = useState("");
    const [presentation, setPresentation] = useState();

    function sendData(e){
        e.preventDefault();
        //alert("Insert");

        const newItem = {
          code,
          name,
          group,
          topic,
          feedback,
          presentation
        }
        // console.log(newItem);

        axios.post("http://localhost:5000/api/panel/add",newItem)
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
    <label for="group" className="form-label">Project Group ID</label>
    <input type="text" className="form-control" id="group" placeholder="Enter Project Group ID" 
    onChange = {(e) =>{
        setGroup(e.target.value);
    }}  />
  
  </div>

  <div className="mb-3">
    <label for="topic" className="form-label">Marks For Topic</label>
    <input type="number" className="form-control" id="topic" placeholder="Enter Marks For Topic" 
    onChange = {(e) =>{
        setTopic(e.target.value);
    }}  />
    
  </div>


  <div className="mb-3">
    <label for="feedback" className="form-label">Feedback</label>
    <input type="text" className="form-control" id="feedback"  placeholder="Enter Feedback" aria-describedby="validationServer05Feedback" required
    onChange = {(e) =>{
        setFeedback(e.target.value);
    }}  />
    
  </div>

  <div className="mb-3">
    <label for="presentation" className="form-label">Marks For Presentation</label>
    <input type="number" className="form-control" id="presentation" placeholder="Enter Marks For Presentation" aria-describedby="validationServer06Feedback" required
    onChange = {(e) =>{
        setPresentation(e.target.value);
    }}  />
    
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
        

        
    )
}