import React , {useState,useEffect} from 'react'
import Navbar from './Navbar'
import {Link} from "react-router-dom"

const Products = () => {
    
     let [products , setProducts ] = useState([])

     let getData = async()=>{

            let res = await fetch("https://fakestoreapi.com/products")
            let data = await res.json()
            setProducts(data)
     }

     useEffect (()=>{
           getData()
     },[])

  return (
    <>
       <Navbar/>
       <div className="container">
        {
            products.map((ele)=>{
                return(
                    <div className="cards" key={ele.id}>
                    <img src={ele.image} alt="" />
                    <h2>Title : {ele.title.slice(0,12)}</h2>
                    <h3>Price : {ele.price}</h3>
                    <button> <Link to={ `${ele.id}`}>MORE INFO  </Link></button>
                    </div>
                )
            })
        }
       </div>

    </>
  )
}

export default Products