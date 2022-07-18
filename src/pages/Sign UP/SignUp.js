import React,{ useState } from 'react';
import logo from '../../assets/Logo.png';
import {Link, Navigate} from 'react-router-dom';
import './SignUp.css'
import TextField from '@mui/material/TextField';
//import { useDispatch } from "react-redux";
//import { login } from './../../feature/userSlice';

export default function SignIn() {

    const[Name,setName]=useState("");
  const[Email,setEmail]=useState("");
  const[Password,setPassword]=useState("");
  const[Errors,setErrors]=useState({});
  const[IsSubmit,setIsSubmit] = useState(false)

  //const dispatch =useDispatch();

  const handlesubmit=(event)=>{
    event.preventDefault();
    setErrors(validate(Name,Email,Password))
    setIsSubmit(true);
    const user={Name,Email,Password}

    // fetch("",{
    //   method:"",
    //   headers:{"" : "" },
    //   body:JSON.stringify(user)
    // }).then(()=>
    // console.log("User Added"))

    // dispatch(
    //   login({
    //   name: Name,
    //   email:Email,
    //   password:Password,
    //   loggedIn:true
    // }));
  };

  const validate=(name,email,pass)=>{

    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const error={};
    if(!name){
        error.name="Name is required!";
      }

    if(!email){
        error.email="Email is required!";
      }

    if(!pass){
      error.password="Password is required!";
    }
    
    else if(!regex.test(pass)){
        error.password="This is not a valid format";
    }
    return error;
  }


  return (
    <div className="Main-Signup"> 
    <Link to="/">
      <img className="Logo" src={logo} alt=""/>
    </Link>
      <div className="Signup-container">
        <h3 id='head1'>Create An Account</h3>
        <p id='line1'>Sign up to countinue</p>
        <form onSubmit={(e) => handlesubmit(e)} className="Form">
        <TextField
          className='Sign-up-label'
            htmlFor="outlined-basic"
            id="outlined-basic"
            label="Fullname"
            type="text"
            value={Name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          <p className='errors'>{Errors.name}</p>

          <TextField
            className='Sign-up-label'
            htmlFor="outlined-basic"
            id="outlined-basic"
            label="Email ID"
            type="email"
            value={Email}
            onChange={(e)=>{setEmail(e.target.value)}}
        />
            <p className='errors'>{Errors.email}</p>

            <TextField
            className='Sign-up-label'
            htmlFor="outlined-password-input"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={Password}
          onChange={(e)=>{setPassword(e.target.value)}}
        />
            <p className='errors'>{Errors.password}</p>
          {Object.keys(Errors).length === 0 && IsSubmit ? (<Navigate to="/Home"/>):null }
          <button type='submit' id='Signup_but'>SIGN UP</button>
        </form>
        <h4 id="footer">Already have an account? <Link to='/Sign-In'>Sign in</Link> </h4>
      </div>
    </div>
  )
}