import React,{useState} from 'react'
import {ask}  from './container'

const Faq = () =>{
    const [clicked, setClicked] = useState(false)
    const toggle = (index) =>{
        if(clicked === index){
            return setClicked(null)
        }
        setClicked(index)
    }
    return(
        <>
        <div className="faq">
            <h5>Got questions? The most commonly asked questions are all answered below</h5>
            <h6>general questions</h6>
        </div>
        <div className="containf">
        <div className="fcontain">
            {ask.map((item,index) =>{
                return(
                    <>
                    <div className="wr" onClick ={()=>toggle(index)} key={index}>
                    <h2>{item.questions}</h2>
                    { clicked == index?(
                        <div className="dropdown">
                            <p>{item.answer}</p>
                        </div>
                    ) :null}
                    </div>
                    
                    </>
                )
            })}
        </div>
        </div>
        </>
    )
}
export default Faq