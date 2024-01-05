import React from "react";
import './App.css'
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Signin from './Components/Signin/Signin';
import SignUp from './Components/Signup/SignUp';
import ContactUs from './Components/ContactUs/Contactus';
import Privacy from './Components/Privacy/Privacy';
import FAQ from './Components/FAQ/FAQ';
import Searchbus from './Components/Searchbus/Searchbus';
import Terms from './Components/Terms/Terms';
import Offers from './Components/Offers/Offers';
import Ticket from './Components/Ticket/Ticket';
import Seat from './Components/Seat/Seat';
import TicketCancel from './Components/TicketCancel/TicketCancel';
import About from './Components/About/About';
import{Route,Routes } from "react-router-dom";
const App =() => {
  return (
    <>
    <div>
      <React.Fragment>
      <Navbar/>
    <div className="container">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Signin" element={<Signin/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      <Route path="ContactUs" element={<ContactUs/>}/>
      <Route path="Privacy" element={<Privacy/>}/>
      <Route path="FAQ" element={<FAQ/>}/>
      <Route path="Searchbus" element={<Searchbus/>}/>
      <Route path="Footer" element={<Footer/>}/>
      <Route path="Terms" element={<Terms/>}/>
      <Route path="Offers" element={<Offers/>}/>
      <Route path="Ticket" element={<Ticket/>}/>
      <Route path="Seat" element={<Seat/>}/>      
      <Route path="TicketCancel" element={<TicketCancel/>}/>      
      <Route path="About" element={<About/>}/>      

    </Routes>
    <br></br>
    <Footer/>
    </div>
    </React.Fragment>
    </div>
    </>
  )
}
export default App