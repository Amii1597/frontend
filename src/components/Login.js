import React, { useState,useEffect} from "react";
import closevector from '../assets/Vector.svg'
import { useNavigate } from 'react-router-dom'
const Login = ({ closeModal2 }) => {

useEffect(()=>{
  document.body.style.overflowY="hidden";
  return()=>{
    document.body.style.overflowY="scroll";
  }
},[])
  const navigate = useNavigate()

const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const loginUser = async(e)=>{
  e.preventDefault();
  const res = await fetch('https://backendstory.onrender.com//signin',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })
  const data = res.json();
  if(res.status === 400 || !data){
    window.alert("Invalid Credentials");
  }else{
    window.alert("Login Successfull")
    navigate("/AfterHeader")
  }
}

  return (
  <>
     <form method="POST">
     <div className="modal-wrapper" ></div>
     <div className="modal-container">
    
             <div className="login_box">
             <img src={closevector} alt="" className="closevector2"  onClick={closeModal2}/><br/>
             <h1 className="login_heading">Login to SwipTory</h1>
            <label> Username <input type="text" placeholder="Email" className="login_email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)}/></label>
            <br /><br/>
          <label> Password   <input type="password" placeholder="Password" className="login_password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)}/></label>
         <br/>
          
          <button className="login_btn" onClick={loginUser}>Sign in</button>
          <br />
   
        
        </div>
        </div>
     
     </form>
  </>
  )
}

export default Login