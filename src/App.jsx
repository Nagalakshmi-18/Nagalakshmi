import React from "react";
import './App.css'
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/SignUp';
import ContactUs from './Components/ContactUs/Contactus';
import Privacy from './Components/Privacy/Privacy';
import FAQ from './Components/FAQ/FAQ';
import Searchbus from './Components/Searchbus/Searchbus';
import OTP from './Components/OTP/OTP';
import TicketCancel from './Components/TicketCancel/TicketCancel';
import Terms from './Components/Terms/Terms'
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
      <Route path="Signup" element={<Signup/>}/>
      <Route path="ContactUs" element={<ContactUs/>}/>
      <Route path="Privacy" element={<Privacy/>}/>
      <Route path="FAQ" element={<FAQ/>}/>
      <Route path="Searchbus" element={<Searchbus/>}/>
      <Route path="OTP" element={<OTP/>}/>
      <Route path="Footer" element={<Footer/>}/>
      <Route path="Terms" element={<Terms/>}/>
      <Route path="TicketCancel" element={<TicketCancel/>}/>
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