import React from "react"
import './Footer.css'
import insta from '../../assets/insta.png';
import twitter from '../../assets/twitter.png';
import fb from '../../assets/facebook.png';
function footer()
{ return(
                <div className="footer">
                    <div className="sb__footer section__padding">
                        <div className="sb__footer-links">
                            
                            <div className="sb__footer-links_div">
                                <h4>For Bisnuss</h4>
                                <a href="/Empolyer">
                                    <p>Employer</p>
                                </a>
                                <a href="/healthplans">
                                    <p>Health Plans</p>
                                </a>
                                <a href="/individual">
                                    <p>Individual</p>
                                </a>
                            </div>
                            <div className="sb__footer-links_div">
                                <h4>Resources</h4>
                                <a href="/resource">
                                    <p>Resource center</p>
                                </a>
                                <a href="/resource">
                                    <p>Resource center</p>
                                </a>
                                <a href="/resource">
                                    <p>Testimonials</p>
                                </a>
                                <a href="/resource">
                                    <p>STV</p>
                                </a>
                            </div>
                            <div className="sb__footer-links_div">
                                <h4>Parteners</h4>
                                <a href="/employee">
                                    <p>Swing Trick</p>
                                </a>
                            </div>
                            <div className="sb__footer-links_div">
                                <h4>Company</h4>
                                <a href="/about">
                                    <p>About</p>
                                </a>
                                <a href="/press">
                                    <p>Press</p>
                                </a>
                                <a href="/career">
                                    <p>Career</p>
                                </a>
                                <a href="/contact">
                                    <p>Contact</p>
                                </a>
                            </div>
                            <div className="sb__footer-links_div">
                                <h4>Coming Soon on</h4>
                                <div className="socialmedia">
                                <a href="https://www.facebook.com"><p><img src={fb} alt=""/></p></a>
                                <a href="https://www.twitter.com/?lang-en-in"><p><img src={twitter} alt=""/></p></a>
                                <a href="https://www.instagram.com/?hl-en"><p><img src={insta} alt=""/></p></a>
                            </div>

                            </div>
                            
                        </div>
                        <hr></hr>
                        <div className="sb__footer-below">
                            
                            <div className="sb__footer-copyrigth">
                                <p>
                                    @{new Date().getFullYear()} codeInn. All right reserved.
                                </p>
                            </div>
                            <div className="sb__footer-below-links">
                                <a href="/Terms"><div><p>Terms & Conditions</p></div></a>
                                <a href="/Privacy"><div><p>Privacy</p></div></a>
                                <a href="/FAQ"><div><p>FAQ</p></div></a>
                                <a href="/Contactus"><div><p>Contact Us</p></div></a>
                            </div>
                        </div>
                    </div>
                </div>
)
}
            export default footer

