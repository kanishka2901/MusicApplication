import React,{ useState,useEffect } from 'react';
import logo from '../../assets/Logo.png';
import './SignIn.css'
import {Link, Navigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';


export default function SignIn() {

  const[Name,setName]=useState("");
  const[Password,setPassword]=useState("");
  const[Errors,setErrors]=useState({});
  const[IsSubmit,setIsSubmit] = useState(false)


  const handlesubmit=(event)=>{
    event.preventDefault();
    setErrors(validate(Name,Password))
    
    setIsSubmit(true);    
  }

  const validate=(name,pass)=>{
    const error={};
    if(!name){
      error.name="Username is required!";
    }

    if(!pass){
      error.password="Password is required!";
    }

    axios.post(`${base_url}/userLogin`),{
      name:Name,
      password: Password
    }.then((res) => {
      
    })

    // user.map(user=>{
    //   if(pass !== user.Password || name !== user.Name){
    //   error.password="Invaild Username or Password";
    //   setName("");
    //   setPassword("");
    // }
    // })
    return error;
  }


  return (
    <div className="Main-Login"> 
    <Link to="/">
     <img className="Logo" src={logo} alt=""/>
    </Link>
      <div className="login-container">
        <h3 id='head2'>WELCOME BACK</h3>
        <p id='line2'>Sign in to countinue</p>

        <form onSubmit={handlesubmit} className="Form">

            <TextField
            className='Sign-in-label' htmlFor="outlined-password-input"
          id="outlined-password-input"
          label="Username"
          type="text"
          value={Name}
          onChange={(e)=>{setName(e.target.value)}}
        />
          <p className='errors'>{Errors.email}</p>
            <TextField
            className='Sign-in-label' htmlFor="outlined-password-input"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={Password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
            <p className='errors'>{Errors.password}</p>

            <a className='forgot-pass' href='/'>Forgot Password</a>
            <button type='submit' id='login_but' >SIGN IN</button>
          {Object.keys(Errors).length === 0 && IsSubmit ? (<Navigate to="/Home"/>) : '' }
        </form>
        <h4 id='footer2'>Don't have an account? <Link to='/Sign-Up'>Sign up</Link></h4>
      </div>
    </div>
  )
}