import React, { useState } from 'react'
import "./Login.css"
import {NavLink, useNavigate} from "react-router-dom"
import axios from 'axios'

const Login = () => {

    let [loginemail , setLoginEmail ] = useState("")
    let [loginpass, setLoginPassword] = useState("")

    let navigate = useNavigate()

    let handleLogin = async(e)=>{
        
        e.preventDefault()

        let res = await axios.get("http://localhost:3000/user")
        let users = res.data
        console.log(users);

        let user = users.find((e)=>e.userEmail == loginemail && e.userPass == loginpass)
        console.log(user);
        
        if(user){
            alert("LOGIN DONE BHAII")

            navigate("/Products")
        }
        else{
            alert("WRONG DETAILS BHAII")
        }
    }


  return (
    <>
    <div className="outer">
        <div className="inner">
            <form action="" onSubmit={handleLogin}>
              <label htmlFor="">ENTER EMAIL:</label>
              <input type="email" placeholder='Enter Email' value={loginemail} onChange={(e)=>{ setLoginEmail(e.target.value)}} />
              <label htmlFor="">ENTER PASSWORD:</label>
              <input type="password" placeholder='Enter Password' value={loginpass} onChange={(e)=>{ setLoginPassword(e.target.value)}} />
              <button>LOGIN</button>
              <p>don't have an account?</p>
              <NavLink to="/">Signup?</NavLink>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login