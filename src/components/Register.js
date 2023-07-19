import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState} from "react";
import '../styles/Register.css'
import closevector from '../assets/Vector.svg'
const Register = ({ closeModal }) => {
  useEffect(()=>{
    document.body.style.overflowY="hidden";
    return()=>{
      document.body.style.overflowY="scroll";
    }
  },[])
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  //   const navigate = useNavigate()
  //   const handleLogin = ()=>{
  //       navigate("/Login")
  //  }
  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("https://backendstory.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Successfull Registration");
      navigate("/AfterHeader")
    }
  };

  return (
    <>
      <form method="POST">
        <div className="modal-wrapper"></div>
        <div className="modal-container">
      <img src={closevector} alt="" className="closevector"  onClick={closeModal}/><br/><br/><br/>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleInputs}
            />
<br/><br/><br/>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInputs}
            />
        <br/><br/>

            <button className="Register_btn" onClick={PostData}>
              Register
            </button>
          </div>
      
      </form>
    </>
  );
};

export default Register;
