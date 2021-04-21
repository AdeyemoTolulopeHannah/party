import {kids} from './container'
import {moree} from './container'


const Iproduct = () =>{
    return(
        <>
        <div className="wra">
            <h1>-party hire product -</h1>
           <div className='join' >
               {kids.map(item =>{ 
                   return(
                       
                     <div className='show'>
                      <img src={item.image} alt={item.title} className='m-image'/>
               <h5>{item.title}</h5>
               </div>
               
                   )
}) }
</div>
           <div className='join' >
               {moree.map(item =>{ 
                   return(
                       
                     <div className='show'>
                      <img src={item.image} alt={item.title} className='m-image'/>
               <h5>{item.title}</h5>
               </div>
               
                   )
}) }          
                 
               </div>
               <button className='pbutton'>view more </button>
               </div>
        </>
    )
}
export default Iproduct