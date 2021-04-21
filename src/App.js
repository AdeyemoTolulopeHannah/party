import React  from 'react'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Box from './components/box'
//import Hallery from './components/gallery'
import Navbar from './components/navbar'
import Slide from './components/slideshow'
import Iproduct from './components/lproduct'
import Bookings from './components/booking'
import Footer from './components/footers'
import Contact from './components/contact'
import Faq from './components/faq'
import Jumping from './components/jumping'
import Routes from './components/jump/route'

function App() {
  
  
  return(
  <Router>
    <Switch>
      <Route exact path='/'>
      <Navbar/>
      <Slide/>
      <Box/>
     <Iproduct/>
      <Bookings/>
       <Routes/>
      </Route>

      <Route path='/contact'>
        <Contact/>
      </Route>
     <Route path='/faq'>
       <Faq/>
     </Route>
     <Route path='/jumping'>
       
       <Jumping/>
     </Route>
    </Switch>

    <Footer/>
  </Router>
 
  
  );
}

export default App;
