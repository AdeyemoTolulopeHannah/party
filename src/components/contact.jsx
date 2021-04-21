import React from 'react'
import image7 from '../Asset/Icons/phone.svg'
import image2 from '../Asset/Icons/mail.svg'
import image8 from '../Asset/Icons/sms.svg'


const Contact =() =>{
    return(
        <>
        <div className="contact">
        <h1>general questions</h1>
        <p>Fill out the details below and one of our party people will be in touch with you in 1 business day</p>
        </div>
        <div className="cform">
            <label htmlFor="firstname">
                <h5>first name:</h5>
                <input type="text" className='name'/>
            </label>
            <label htmlFor="lastname">
                <h5>last name:</h5>
                <input type="text"className='name'/>
            </label>
            <label htmlFor="email">
                <h5>email:</h5>
                <input type="email"className='name'/>
            </label>
            <label htmlFor="phone">
                <h5>mobile phone:</h5>
                <input type="tel" className='name'/>
            </label>
            <label htmlFor="suburb">
                <h5>suburb:</h5>
                <input type="text" className='name'/>
            </label>
            <label htmlFor="pcode">
                <h5>postcode:</h5>
                <input type="tel" className='name'/>
            </label>
            <label htmlFor="date">
                <h5>hire start date:</h5>
                <input type="text" className='no'/>
            </label>
            <label htmlFor="date">
                <h5>hire end date:</h5>
                <input type="text" className='no'/>
            </label>
            <label htmlFor="time">
                <h5>start time:</h5>
                <input type="tel" className='no'/>
            </label>
            <label htmlFor="time">
                <h5>end time:</h5>
                <input type="tel" className='no'/>
            </label>
            <label htmlFor="message">
                <h5>Product you are intrested in and message:</h5>
                <textarea></textarea>
            </label>
            <button type='submit'>send message</button>
        </div>
        <div className="means">
            <div className="mail">
                <img src={image2} alt="mail"/>
                <h5>email</h5>
                <h6>for any non urgent enquiries, email us using the form in the <span>contact</span> page.</h6>
                <p> we respond to all quries within 1 business day.</p>
            </div>
            <div className="mail">
                <img src={image8} alt="sms"/>
                <h5>phone</h5>
                <h6>sms us on <span>0409 222 452 </span>for any enquiries <br/>(MON-FRI,8AM-4PM)</h6>
            
            <p>N.B This mobile does not receive incoming calls - TEXT only</p>
            </div>
            <div className="mail">
                <img src={image7} alt="phone"/>
                <h5>phone</h5>
                <h6>Like the old way of getting things done?</h6>
                <p>Phone us MON-FRI, 8AM-4PM <br/> <span>07 3177 3316</span></p>
            </div>
        </div>
        
        </>
    )
}
export default Contact