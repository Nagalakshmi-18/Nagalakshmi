import React from "react";
import './Contactus.css';
function Contactus ()
{
    return(
        <>
        
            <section class="contact">
            <div class="content">
                <h2>Contact Us</h2><br/>
                <p>Simply put, a paragraph is a collection of sentences all related to a central topic, idea, or theme.
                     Paragraphs act as structural tools for writers to organize their thoughts into an ideal progression</p><br/>
            </div>
            <div class="contanier">
                <div class="contactInfo">
                    <div class="box">
                        <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div><br/>
                        <div class="text">
                            <h3>Address</h3><br/>
                            <p>R. VASUDEVAN 
                                No. 1, New Bangaru Naidu Colony,
                                Chennai - 600078.</p><br/>
                        </div>
                    </div>

                    <div class="box">
                        <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div><br/>
                        <div class="text">
                            <h3>Phone</h3><br/>
                            <p>123-456-890</p>
                        </div>
                    </div><br/>

                    <div class="box">
                        <div class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div><br/>
                        <div class="text">
                            <h3>Email</h3><br/>
                            <p>abcd18.08@gmail.com</p><br/>
                        </div>
                    </div>
                </div>
                <div class="contactForm">
                    <form>
                        <h2>Send Message</h2>
                        <div class="inputBox">
                            <input type="text" name="" required="required"/>
                            <span>Full Name</span>
                        </div>
                        <div class="inputBox">
                            <input type="text" name="" required="required"/>
                            <span>Email</span>
                        </div>
                        <div class="inputBox">
                            <input type="text" name="" required="required"/>
                            <testarea required="required"></testarea>
                            <span>Type your Message...</span>
                        </div>
                        <div class="inputBox">
                            <input type="submit" name="" value="send"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}
export default Contactus