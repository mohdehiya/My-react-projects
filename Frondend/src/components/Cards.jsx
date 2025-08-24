import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Cards = () => {

     let [items, setItems] = useState([])

     let getData = async()=>{
          let res = await fetch(`http://localhost:3000/items`)
          let data = await res.json()
          setItems(data)
     }
     useEffect (()=>{
        getData()
     },[])

     let deleteItem = async(id)=>{
         await axios.delete(`http://localhost:3000/items/${id}`)
         getData()
     }

  return (
    <>
       <Navbar/>
       <div className="containercards">
        {
            items.map((ele)=>{
              return(
                <div className="cart" key={ele.id}>
                    <img src={ele.image} alt="" />
                    <h2>Title : {ele.title}</h2>
                    <h3>Price : {ele.price}</h3>
                    <button onClick={()=>deleteItem(ele.id)}>Remove</button>
                </div>
              )
            })
        }
       </div>

    </>
  )
}

export default Cards