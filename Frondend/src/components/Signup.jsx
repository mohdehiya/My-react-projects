import React, {useState} from "react"
import "./Signup.css"
import {BrowserRouter,Routes,Route, useNavigate, NavLink,Link} from "react-router-dom"
import axios from 'axios'

const Signup = () => {

   let [name,setName] = useState("")

   let [email,setEmail] = useState("")

   let [password, setPassword] = useState("")

   let navigate = useNavigate()

   let handleSumbit = async(e)=>{

    e.preventDefault()

    let payload = {

       userName : name,
       userPass : password,
       userEmail : email
    }

      await axios.post("http://localhost:3000/user",payload)

    alert("signup done")

    setEmail("")
    setName("")
    setPassword("")
     
    navigate("/Login") 

   }


  return (
    <>
     <div className="outer">
        <div className="inner">
            <form action="" onSubmit={handleSumbit}>
              <label htmlFor="">ENTER NAME:</label>
              <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>{ setName(e.target.value)}} />
              <label htmlFor="">ENTER EMAIL:</label>
              <input type="email" placeholder='Enter Email'value={email} onChange={(e)=>{ setEmail(e.target.value)}}/>
              <label htmlFor="">ENTER PASSWORD:</label>
              <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>{ setPassword(e.target.value)}}/>
              <button>SIGN UP</button>
              <p>Already have an account?</p>
              <NavLink to="/Login">Login?</NavLink>
            </form>
        </div>
    </div>
    </>
  )
}

export default Signup