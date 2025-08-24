import React from 'react'
import Signup from './components/signup'
import Login from './components/login'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Products from './components/Products'
import Product from './components/Product'
import Cards from './components/Cards'


const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element= {<Signup/>}></Route>
      <Route path='/Login' element = {<Login/>}></Route>
      <Route path='/Products' element={<Products/>}></Route>
        <Route path='/Products/:pid' element = {<Product/>}></Route>
       <Route path='/Cards' element={<Cards/>}></Route>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App