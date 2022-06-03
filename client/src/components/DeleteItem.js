import React, { Component } from 'react';
import axios from 'axios';
import Home from './Home';
import { Router } from 'react-router-dom';



class deleteItem extends Component {
  constructor(props) {
    super(props);

    this.setItemCode = this.setItemCode.bind(this);  //bind user defined function
    this.setItemName = this.setItemName.bind(this);
    this.setItemCategory = this.setItemCategory.bind(this);
    this.setItemQuentity = this.setItemQuentity.bind(this);
    this.setItemType = this.setItemType.bind(this);
    this.setItemPrice = this.setItemPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
        code:'',
        name:"",
        category:"",
        quentity:"",
        type:"",
        price:"",
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:5000/api/store/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          code:res.data.code,
          name:res.data.name,
          category:res.data.category,
          quentity:res.data.quentity,
          type:res.data.type,
          price:res.data.price,
        });
        this.setState();
      })
      .catch(err => {
        console.log("Error from updateappoinment");
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
      .delete('http://localhost:5000/api/store/delete/'+this.props.match.params.id, editItems)
      .then(res => {
        this.props.history.push('/delete/'+this.props.match.params.id);
        alert('Item data deleted successfully');
        
    })
      .catch(err => {
        console.log("Error in Delete Item!");
      })
  };


  render() {

    
    return (
        <div className="container">
        <h3> Delete Item </h3>
       <form onSubmit={this.onSubmit}>


      

<button type="submit" className="btn btn-primary">Delete</button>
</form>
   </div>

    );
  }
}

export default deleteItem;