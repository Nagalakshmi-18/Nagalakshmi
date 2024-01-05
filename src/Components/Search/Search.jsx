 import React from "react";
 import './Search.css';
 import Offers from '../Offers/Offers';

 import  {HiOutlineLocationMarker} from 'react-icons/hi';
 import { RxCalendar } from "react-icons/rx";
const Search = () =>
{
    return(
        <>
        <div className="search container section">
            <div className="sectionCotainer grid">
                <div className="btns flex">
                    <div className="searchInputs flex">
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <HiOutlineLocationMarker className="icon"/>
                            </div>
                            <div className="texts">
                                <h4>Form</h4>
                                <input type="text" placeholder="Location From"/>
                            </div>
                        </div>
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <HiOutlineLocationMarker className="icon"/>
                            </div>
                            <div className="texts">
                                <h4>To</h4>
                                <input type="text" placeholder="Location To"/>
                            </div>
                        </div>
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <RxCalendar className="icon"/>
                            </div>
                            <div className="texts">
                                <h4>Search Date</h4>
                                <input type="text" placeholder="select Date"/>
                            </div>
                        </div>
                        

                      <a href="/Ticket"><button className="btn btnBlock flex"> Search Bus</button></a>
                    </div> 
                </div>
            </div>
        </div>
        <Offers/>
        </>
    )
}
export default Search