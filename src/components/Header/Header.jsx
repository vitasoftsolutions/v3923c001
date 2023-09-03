import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div id="header" className="section header-section">

                <div className="container">


                    <div className="header-wrap">

                        <div className="header-logo">
                            <a href="index.html"><img src="assets/images/logo.png" alt="" /></a>
                        </div>

                        <div className="header-menu d-none d-lg-block">
                            <ul className="main-menu">
                                <li className="active-menu">
                                    <Link to="/">Home</Link>

                                </li>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li><Link to="/services">Services</Link></li>

                                <li><Link to="/career">Career</Link></li>
                            </ul>
                        </div>


                        <div className="header-meta">




                            <div className="header-btn d-none d-xl-block">
                                <Link className="btn" to="/contact">Contact Us</Link>
                            </div>

                            <div className="header-toggle d-lg-none">
                                <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>

                        </div>


                    </div>


                </div>
            </div>
            <div className="offcanvas offcanvas-start" id="offcanvasExample">
                <div className="offcanvas-header">
                    
                    <div className="offcanvas-logo">
                        <a href="index.html"><img src="assets/images/logo-white.png" alt=""/></a>
                    </div>
                    
                    <button type="button" className="close-btn" data-bs-dismiss="offcanvas"><i
                        className="flaticon-close"></i></button>
                </div>

               
                <div className="offcanvas-body">
                    <div className="offcanvas-menu">
                        <ul className="main-menu">
                            <li className="active-menu">
                                <a href="index.html">Home</a>
                                <ul className="sub-menu">
                                    <li className="active"><a href="index.html">Home Main</a></li>
                                    <li><a href="index-2.html">AI Solutions</a></li>
                                    <li><a href="index-3.html">Cyber Security</a></li>
                                    <li><a href="index-4.html">IT Solutions</a></li>
                                    <li><a href="index-5.html">Software Company</a></li>
                                    <li><a href="index-6.html">IT Agency</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="about.html">Aboute Us</a>
                            </li>
                            <li><a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="team.html">Our Team</a></li>
                                    <li><a href="service.html">Service</a></li>
                                    <li><a href="choose-us.html">Why Choose Us</a></li>
                                    <li><a href="testimonial.html">Testimonial</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                    <li><a href="login-register.html">Login & Register</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="blog.html">Blog Grid</a></li>
                                    <li><a href="blog-standard.html">Blog List</a></li>
                                    <li><a href="blog-details.html">Blog Single</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Header;