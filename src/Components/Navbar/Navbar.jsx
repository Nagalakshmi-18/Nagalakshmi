import React, {useState}from "react";
import './NavBar.css';
import Search  from '../Search/Search';
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
                        <span>Sign Out</span>
                    </div>
                </div>

                <div className="navBarTwo ">
                    <div className="logoDiv">
                        <img src={logo} className="Logo"/>
                    </div>

                    <div className={active}>
                        <ul className="menu flex">
                            <li onClick={removeNavBar} className="listItem">Home</li>
                            <li onClick={removeNavBar} className="listItem">About</li>
                            <li onClick={removeNavBar} className="listItem">Offers</li>
                            <li onClick={removeNavBar} className="listItem">Seats</li>
                            <li onClick={removeNavBar} className="listItem">Destinations</li>
                        </ul>

                        <button onClick={removeNavBar} className="btn flex btnOne">
                            Contact
                        </button>
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