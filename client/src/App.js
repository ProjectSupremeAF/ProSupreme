import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar.js' 
import Signin from './components/Std_signin.js';
import Signup from './components/Std_signup.js';
import StudentDashboard from './components/std_dashboard.js';
import RegisterTopic from './components/reg_res_topic.js';
import RegisterGroup  from './components/reg_std_group.js'; 
import './styles/std_styles.css';

function App() {


  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Signin/>}/>       
        <Route exact path="/student_signin" element={<Signin/>}/>
        <Route exact path="/student_signup" element={<Signup/>}/>
        <Route exact path="/student_dashbord" element={<StudentDashboard/>}/>
        <Route exact path="/student_register_group" element={<RegisterGroup/>}/>
        <Route exact path="/student_register_topic" element={<RegisterTopic/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
