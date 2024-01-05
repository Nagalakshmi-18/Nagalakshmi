import React, {useState}from "react";
import './NavBar.css';
import {SiConsul} from 'react-icons/si';
import {BsPhoneVibrate} from 'react-icons/bs';
import {AiOutlineGlobal} from 'react-icons/ai';
import {CgMenuGridO} from 'react-icons/cg';
import logo from '../../assets/logo.png';
const Navbar = () =>
{
    const [active, setActive] = useState('navBarMenu')
    const showNavBar = () =>{
        setActive('navBarMenu showNavBar')
    }
    const removeNavBar = () =>{
        setActive('navBarMenu')
    }
    
    return(
        <>
        
            <div className="navBar flex">
                <div className="navBarOne flex">
                    <div>
                        <SiConsul className="icon"/>
                    </div>
                    <div className="none flex">
                        <li className="flex"><BsPhoneVibrate className="icon"/>Support</li>
                        <li className="flex"><AiOutlineGlobal className="icon"/>Languages</li>
                    </div>
                    <div className="atb flex">
                        <a href="/Signin"><span>Sign In</span></a>
                       <a href="/SignUp"> <span>Sign Up</span></a>
                    </div>
                </div>

                <div className="navBarTwo ">
                    <div className="logoDiv">
                        <img src={logo} className="Logo"/>
                    </div>

                    <div className={active}>
                        <ul className="menu flex">
                           <a href="/"> <li onClick={removeNavBar} className="listItem">Home</li></a>
                           <a href="/About"> <li onClick={removeNavBar} className="listItem">About</li></a>
                            <a href="/Offers"><li onClick={removeNavBar} className="listItem">Offers</li></a>
                            <a href="/Seat"><li onClick={removeNavBar} className="listItem">Seats</li></a>
                           <a href="/Ticket"> <li onClick={removeNavBar} className="listItem">Ticket Booking</li></a>
                           <a href="/TicketCancel"> <li onClick={removeNavBar} className="listItem">Ticket Cancel</li></a>
                        </ul>

                       <a href="/ContactUs"> <button onClick={removeNavBar} className="btn flex btnOne">
                            Contact
                        </button></a>
                    </div>


                        <div onClick={showNavBar} className="toggleIcon">
                            <CgMenuGridO className="icon"/>

                        </div>
                </div>

            </div>
            
        </>
    )
}
export default Navbar