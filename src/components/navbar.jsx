import React from 'react'
import {Link} from 'react-router-dom'
import image from '../Asset/Icons/logo.svg'


const Navbar =() =>{
    

    return(
        <>
        <div className='nav'>
        <Link className='logo' to='/'><img src={image} alt='Logo'/></Link>
            <ul>
                <Link className='links' to='/jumping'>Jumping Castles</Link>
                 <Link className='links' to='/service'>Fun Foods</Link>
                 <Link className='links' to='/party'>Party Hire</Link>
                 <Link className='links' to='/faq'>FAQ</Link>
                 <Link className='links' to='/contact'>Contact</Link>
            </ul>
        </div>
        </>
    )
}
export default Navbar