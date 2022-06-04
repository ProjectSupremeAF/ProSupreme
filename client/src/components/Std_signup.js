import React from "react";
import {useState} from 'react';

const Std_signup = () => {

  const [id, setId ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword]  = useState('');

  async function registerStudent(event) {
    event.preventDefault();
    const response = await fetch('https://localhost:5000/api/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        email,
        password,
      }),
    })

    const data = await response.json()

    console.log(data)
  }



return (
<div class="cotainer">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card" style = {{marginTop:'20px'}}>
        <div class="card-header">
          <b>Student Sign-In</b>
        </div>
        <div class="card-body">
          <form onSubmit ={registerStudent}>
            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right">
                ID Number
              </label>
              <div class="col-md-6">
                <input value={id} onChange={(e) => setId(e.target.value)} type="text" id="email_address" class="form-control" name="email" required />
              </div>
            </div>
            <br />
            <div class="form-group row">
              <label class="col-md-4 col-form-label text-md-right">
                Student Email Address
              </label>
              <div class="col-md-6">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="email_address" class="form-control" name="email" required />
              </div>
            </div>

            <br />
            <div class="form-group row">
              <label for="password" class="col-md-4 col-form-label text-md-right">
                Password
              </label>
              <div class="col-md-6">
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" class="form-control" name="password" required />
              </div>
            </div>
            <br />
            <div class="form-group row">
              <div class="col-md-6 offset-md-4">
                <a href="/student_signin">existing user</a>
              </div>
            </div>
            <br />
            <div class="form-group row">
              <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-success">
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default Std_signup;