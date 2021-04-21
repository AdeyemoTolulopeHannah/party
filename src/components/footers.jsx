import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import{Link} from 'react-router-dom'


const Footer = () =>{
    return(
        <>
        <div className="foot">
            <div className="email">
                <h4>Stay in touch</h4>
                <div className="form">
                <input type="text" placeholder='join our newsletter'/>
                <button type='submit'>subscribe</button>
                </div>
            </div>
            <div className="link">
                <div className="pages">
                    <h5>popular pages</h5>
                    <ul>
                    <Link className='flink'>backyard parties</Link>
                    <Link className='flink'>weddings</Link>
                    <Link className='flink'>business/corporate</Link>
                    <Link className='flink'>sporting club</Link>
                    <Link className='flink'>school events</Link>
                    
                    <Link className='flink'>community/public</Link>
                    
                    </ul>
                </div>
                <div className="pages">
                    <h5>quick links</h5>
                <ul>
                    <Link className='flink'>Home</Link>
                    <Link className='flink'>Delivery</Link>
                    <Link className='flink'>Reviews</Link>
                    <Link className='flink'>FAQ</Link>
                    <Link className='flink'>Party hire</Link>
                    </ul>
                </div>
                <div className="social">
                    <h5>contact us</h5>
                  <ul>
                  <li> <FaFacebookF/> </li>
                  <li> <FiInstagram/> </li>
                  <li> <FaLinkedinIn/></li>
                   <li> <FaTwitter/></li>
                   </ul>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer