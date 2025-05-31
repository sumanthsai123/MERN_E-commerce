import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom';

export const LoginSignup = () => {
  const navigate = useNavigate();

  const [state,setState] = useState('Login')

  const [formData,setFormData] = useState({
    username:'',
    password:'',
    email:'',
    role: 'user', // default role
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

 

  const login = async () => {
  let responseData;
  await fetch('http://localhost:4000/login', {
    method: 'POST',
    headers: {
      Accept: 'application/form-data',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => (responseData = data));

  if (responseData.success) {
    localStorage.setItem('auth-token', responseData.token);
    localStorage.setItem('role', responseData.role); // Save role
    if (responseData.role === 'admin') {
      // window.location.replace('/admin'); // Redirect to admin panel
       navigate('/admin'); // Use navigate from react-router-dom
    } else {
      // window.location.replace('/'); // Redirect to home page
      navigate('/');
    }
    window.location.reload(); // <-- Add this line
  } else {
    alert(responseData.errors || responseData.error);
  }
  
};



const signup = async () => {
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      localStorage.setItem('role', responseData.role); // Save role
      if (responseData.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      alert(responseData.errors || responseData.error);
    }
  };

  return (
    <div className="LoginSignup">
      <div className='LoginSignup-container'>
        <div className="form-section">
          <h1 className='signup'>{state}</h1>
          <div className="inputs">
            {state === "Sign Up" ? (
              <>
                <p>Username</p>
                <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Enter Your Name' />
                <p>Register as</p>
                <select name="role" value={formData.role} onChange={changeHandler}>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </>
            ) : null}
            <p>Email</p>
            <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder=' Enter Your Email Address' />
            <p>Password</p>
            <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder=' Enter Your password' />
            <button onClick={() => { state === 'Login' ? login() : signup() }}>Continue</button>
          </div>

          {state === 'Sign Up'
            ? <p className='login'>Already have an account? <span onClick={() => { setState('Login') }}>Login Here</span></p>
            : <p className='login'>Create an account <span onClick={() => { setState('Sign Up') }}>Click Here</span></p>}
          <div className="terms">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}