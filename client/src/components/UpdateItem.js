import React, { Component } from 'react';
import axios from 'axios';


class updateItem extends Component {
  constructor(props) {
    super(props);

    this.setItemCode = this.setItemCode.bind(this);  //bind user defined function
    this.setItemName = this.setItemName.bind(this);
    this.setItemCategory = this.setItemCategory.bind(this);
    this.setItemQuentity = this.setItemQuentity.bind(this);
    this.setItemType = this.setItemType.bind(this);
    this.setItemPrice = this.setItemPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    
    this.state={
        code:'',
        name:'',
        category:'',
        quentity:'',
        type:'',
        price:'',
  };
  }

  componentDidMount() {
   
   // console.log("Print id: " + this.props.match.params.id);

    axios.get('http://localhost:5000/api/store/get/'+this.props.match.params.id)
      .then((res) => {
         //this.setState({...this.state, block: res.data})
         console.log(res.data)
        this.setState({
          code:res.data.item.code,
          name:res.data.item.name,
          category:res.data.item.category,
          quentity:res.data.item.quentity,
          type:res.data.item.type,
          price:res.data.item.price,
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

setItemCategory(e){
    this.setState({category: e.target.value});
}

setItemQuentity(e){
    this.setState({quentity: e.target.value}); 
}

setItemType(e){
    this.setState({type: e.target.value}); 
}

setItemPrice(e){
    this.setState({price: e.target.value}); 
}


  onSubmit(e) {
    e.preventDefault();

    const editItems = {
      code: this.state.code,
      name: this.state.name,
      category: this.state.category,
      quentity: this.state.quentity,
      type: this.state.type,
      price: this.state.price,
      
    };
    console.log(editItems);

    axios
      .put('http://localhost:5000/api/store/update/'+this.props.match.params.id, editItems)
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
    <label for="category" className="form-label">Project Group ID</label>
    <input type="text" className="form-control" id="category" placeholder="Enter Project Group ID" 
   value={this.state.category}
   onChange={this.setItemCategory} />
  </div>

  <div className="mb-3">
    <label for="quentity" className="form-label">Marks For Topic</label>
    <input type="number" className="form-control" id="quentity" placeholder="Enter Marks For Topic" 
  value={this.state.quentity}
  onChange={this.setItemQuentity} />
  </div>

  <div className="mb-3">
    <label for="type" className="form-label">Feedback</label>
    <input type="text" className="form-control" id="typr" placeholder="Enter Feedback" 
    value={this.state.type}
    onChange={this.setItemType} />
  </div>

  <div className="mb-3">
    <label for="price" className="form-label">Marks For Presentation</label>
    <input type="number" className="form-control" id="price" placeholder="Enter Marks For Presentation" 
   value={this.state.price}
   onChange={this.setItemPrice} />
  </div>
  
  <button type="submit" className="btn btn-primary">Update</button>
</form>
        </div>
    );
  }
}


export default updateItem;