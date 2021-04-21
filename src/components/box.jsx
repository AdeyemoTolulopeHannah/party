import React, {useState} from 'react'
import {box} from './container'


const Box = () =>{
     

    return(
        <>
           <div className='wrap' >
               {box.map(item =>{ 
                   return(
                       
                     <div className='display'>
                      <img src={item.image} alt={item.title} className='box-image'/>
               <h5>{item.title}</h5>
               </div>
               
                   )
}) }
                     
                   

               
               </div>
        </>
    )
}
export default Box