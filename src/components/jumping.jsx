
import React,{useState}from 'react'
import { render } from 'react-dom';
import {product} from './product'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import { Link,  useParams, useRouteMatch } from 'react-router-dom'
import Image from './image'

    
     const Jumping = () =>{
         return(
             <div>
                 {product.map(products =>(
                     <Link to={products.path}>{products.name}</Link>
                 ))}
                 <Image/>
             </div>
         )
     }   
       
         
    

            
export default Jumping
