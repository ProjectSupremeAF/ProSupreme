import React, { Component } from 'react';
import axios from 'axios';


class updateItem extends Component {
  constructor(props) {
    super(props);

    this.setItemCode = this.setItemCode.bind(this);  //bind user defined function
    this.setItemName = this.setItemName.bind(this);
    this.setItemGroup = this.setItemGroup.bind(this);
    this.setItemTopic = this.setItemTopic.bind(this);
    this.setItemFeedback = this.setItemFeedback.bind(this);
    this.setItemPresentation = this.setItemPresentation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    
    this.state={
        code:'',
        name:'',
        group:'',
        topic:'',
        feedback:'',
        presentation:'',
  };
  }

  componentDidMount() {
   
   // console.log("Print id: " + this.props.match.params.id);

    axios.get('http://localhost:5000/api/panel/get/'+this.props.match.params.id)
      .then((res) => {
         //this.setState({...this.state, block: res.data})
         console.log(res.data)
        this.setState({
          code:res.data.item.code,
          name:res.data.item.name,
          group:res.data.item.group,
          topic:res.data.item.topic,
          feedback:res.data.item.feedback,
          presentation:res.data.item.presentation,
        });
      })
      .catch(err => {
        console.log("Error from updateitem");
      })

      
  };

 


  setItemCode(e){
    this.setState({code: e.target.value}); //Asign user input value to state variable
}

setItemName(e){
    this.setState({name: e.target.value}); 
}

setItemGroup(e){
    this.setState({group: e.target.value});
}

setItemTopic(e){
    this.setState({topic: e.target.value}); 
}

setItemFeedback(e){
    this.setState({feedback: e.target.value}); 
}

setItemPresentation(e){
    this.setState({presentation: e.target.value}); 
}


  onSubmit(e) {
    e.preventDefault();

    const editItems = {
      code: this.state.code,
      name: this.state.name,
      group: this.state.group,
      topic: this.state.topic,
      feedback: this.state.feedback,
      presentation: this.state.presentation,
      
    };
    console.log(editItems);

    axios
      .put('http://localhost:5000/api/panel/update/'+this.props.match.params.id, editItems)
      .then(res => {
        this.props.history.push('/update/'+this.props.match.params.id);
        alert('Item data updated successfully');
        
    })
      .catch(err => {
        console.log("Error in updateitem!");
      })
      
  };


 
  

  render() {
    return (
      <div className="container">
             <h3> Update Item </h3>
            <form onSubmit={this.onSubmit}>
  <div className="mb-3">
    <label for="code" className="form-label">ID</label>
    <input type="number" className="form-control" id="code" placeholder="Enter ID" 
    value={this.state.code}
    onChange={this.setItemCode} />
  </div>

  <div className="mb-3">
    <label for="name" className="form-label">Panel Member Name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter Panel Member Name" 
    value={this.state.name}
    onChange={this.setItemName} />
  </div>

  <div className="mb-3">
    <label for="group" className="form-label">Project Group ID</label>
    <input type="text" className="form-control" id="group" placeholder="Enter Project Group ID" 
   value={this.state.group}
   onChange={this.setItemGroup} />
  </div>

  <div className="mb-3">
    <label for="topic" className="form-label">Marks For Topic</label>
    <input type="number" className="form-control" id="topic" placeholder="Enter Marks For Topic" 
  value={this.state.topic}
  onChange={this.setItemTopic} />
  </div>

  <div className="mb-3">
    <label for="feedback" className="form-label">Feedback</label>
    <input type="text" className="form-control" id="feedback" placeholder="Enter Feedback" 
    value={this.state.feedback}
    onChange={this.setItemFeedback} />
  </div>

  <div className="mb-3">
    <label for="presentation" className="form-label">Marks For Presentation</label>
    <input type="number" className="form-control" id="presentation" placeholder="Enter Marks For Presentation" 
   value={this.state.presentation}
   onChange={this.setItemPresentation} />
  </div>
  
  <button type="submit" className="btn btn-primary">Update</button>
</form>
        </div>
    );
  }
}


export default updateItem;