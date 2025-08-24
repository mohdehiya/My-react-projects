import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const Product = () => {

    let params = useParams()

    let {pid} = params
    
     let [product ,setProduct] = useState({})

    let navigate = useNavigate()

   let getData = async()=>{

       let res = await fetch(`https://fakestoreapi.com/products/${pid}`)
       let data = await res.json()
       setProduct(data)
   }

   useEffect(()=>{
        getData()
   },[])

    let previous = ()=>{
        navigate(-1)
    }

    let addCart = async(product)=>{
         let {id,...rest} = product

         await axios.post("http://localhost:3000/items",rest)
         alert("product added")
    }
  return (
    <>
    
       <div className="productmain">
        <div className="inner">
            <img src={product.image} alt="" />
            <h1>Product Name - {product.title}</h1>
            <h3>Product Description - {product.description}</h3>
            <button onClick={()=>addCart(product)}>add to cart</button>
        </div>
         <button className='btn' onClick={previous}> Pervious</button>
       </div>
    
    </>
  )
}

export default Product