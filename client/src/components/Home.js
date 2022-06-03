import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';


export default function AllItems(){

    const [Items, setItems] = useState([]);

    useEffect(( )=> {
        function getItems() {
            axios.get("http://localhost:5000/api/store/all")
            .then((res) => {
                console.log(res.data);
                setItems(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getItems();
    }, [])

     return(
         <div className="container">
             <h3>Marking Table </h3><br/><br/>
             <table class="table table-bordered">
                 <thead>
                     <tr>
                        {/*<th scope="col">#</th>*/}
                         <th scope="col">ID</th>
                         <th scope="col">Panel Member Name</th>
                         <th scope="col">Project Group ID</th>
                         <th scope="col">Marks For Topic</th>
                         <th scope="col">Feedback</th>
                         <th scope="col">Marks For Presentation</th>
                         <th scope="col">Action</th>
                     </tr>
                 </thead>
                 <tbody>
                     {Items.map((item,index)=>(
                         <tr>
                             {/*<th scope="row">{index+1}</th>*/}
                             <td>{item.code}</td>
                             <td>{item.name}</td>
                             <td>{item.category}</td>
                             <td>{item.quentity}</td>
                             <td>{item.type}</td>
                             <td>{item.price}/100</td>
                             <td>
                             <Link to={`/update/${item._id}`}>
                                 <a className="btn btn-success" >
                                     <i className="fas fa-edit"></i>&nbsp;   Edit  
                                 </a>
                             </Link>
                                 &nbsp;
                             <Link to={`/delete/${item._id}`}>
                                 <a className="btn btn-danger" href="#">
                                     <i className="far fa-trash-alt"></i>&nbsp;Delete
                                 </a>
                             </Link>
                             </td>
                         </tr>
                     ))}
                 </tbody>
             </table>           
                
         </div>
     )
        }
                     
    
                     
                     
                    
        
