//import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import UpdateItem from './components/UpdateItem';
import Header from './components/Header';
import AddItem from './components/AddItem';
import DeleteItem from './components/DeleteItem';
import GetOne from './components/GetOne';

import {BrowserRouter as Router, Route} from "react-router-dom";

   function App() {
     return (
       <Router>
       <div className="App">
      
      <h1> Presentation Evaluation </h1>

      

      <Header />
      
     <Route path="/add" exact component={AddItem} />
     <Route path="/" exact component={Home} /> 
     <Route path="/update/:id" exact component={UpdateItem} />
     <Route path="/delete/:id" exact component={DeleteItem} /> 
     <Route path="/one/:id" exact component={GetOne} />

    </div>
    </Router>
  );
}

export default App;

