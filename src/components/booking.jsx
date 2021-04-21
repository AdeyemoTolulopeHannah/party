import React from 'react'
import image1 from '../Asset/Images/book.jpg'
import image2 from '../Asset/Icons/check.svg'
import image3 from '../Asset/Icons/book.svg'
import image4 from '../Asset/Icons/quick.svg'

const Bookings = () =>{
    return(
        <>
        <div className="b-container">
            <div className="bookimg">
                <img src={image1} alt="booking"/>
            </div>
            <div className="bcontent">
              <h2>booking online is  as easy as 1,2,3</h2>
              <ul>
                  <li> <img src={image2} alt="item"/> <p>select your item(s)</p> </li>
                  <li> <img src={image4} alt="avaliable"/>   <p> check live avaliability </p></li>
                  <li> <img src={image3} alt="book"/> <p>  book and pay online</p></li>
              </ul>
              <p>seat back and relax and let us do the rest.</p>
            </div>
        </div>
        </>
    )
}
export default Bookings