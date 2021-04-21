import React, {useState} from 'react'
import { arr } from './array';
//import { BsArrowRightShort } from "react-icons/bs";
//import { BsArrowLeft } from "react-icons/bs";
import {GoPrimitiveDot} from 'react-icons/go'

const Slide = () =>{

  const [value, setValue] = useState(0);
  
  return(
  <>
  <div className="container">
    <img src = {arr[value].image} alt={arr[value].id}/>
    <div className="content">
    <h3 className='text'>{arr[value].title}</h3>
    <p>{arr[value].list}</p>
    </div>
    
      <div className="button">
    <button type="button" onClick={() => value == 0 ? setValue(1) : setValue(0)}><GoPrimitiveDot /></button>
    <button type="button" onClick={() => value !== 1 ? setValue(1) : setValue(0)}><GoPrimitiveDot /></button>
    <button type="button" onClick={() => value !== 2 ? setValue(2) : setValue(0)}><GoPrimitiveDot /></button>
      </div>
    
  </div>
  </>
  );
}
export default Slide