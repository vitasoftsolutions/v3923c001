

const Footer = () => {
    return (
        <>
            <div className="section techwix-cta-section-02">
                <div className="container">
                    
                    <div className="cta-wrap" style={{backgroundImage: 'url(https://github.com/iftesamulohy/vitasofttemplate/blob/master/assets/images/bg/cta-bg.jpg?raw=true)'}}>
                        <div className="row align-items-center">
                            <div className="col-xl-9 col-lg-8">
                                
                                <div className="cta-content">
                                    <div className="cta-icon">
                                        <img src="assets/images/cta-icon2.png" alt=""/>
                                    </div>
                                    <p>We’re Delivering the best customer Experience</p>
                                </div>
                                
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                
                                <div className="cta-btn">
                                    <a className="btn btn-white" href="#">+00 000 000 000</a>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="section footer-section footer-section-03"
                style={{ backgroundImage: 'url(https://github.com/iftesamulohy/vitasofttemplate/blob/master/assets/images/bg/footer-bg.jpg?raw=true)' }}>

                <div className="container">

                    <div className="footer-widget-wrap">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">

                                <div className="footer-widget-about">
                                    <a className="footer-logo" href="index.html"><img src="assets/images/logo-white.png"
                                        alt="Logo" /></a>
                                    <p>Accelerate innovation with world-class tech teams We’ll match you to an entire remote
                                        team of incredible freelance talent.</p>
                                    <div className="footer-social">
                                        <ul className="social">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-sm-6">

                                <div className="footer-widget">
                                    <h4 className="footer-widget-title">Useful Links</h4>

                                    <div className="widget-link">
                                        <ul className="link">
                                            <li><a href="#">Terms & Conditions</a></li>
                                            <li><a href="#">About Company</a></li>
                                            <li><a href="#">Payment Gatway</a></li>
                                            <li><a href="#">Policy</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-sm-6">

                                <div className="footer-widget">
                                    <h4 className="footer-widget-title">Our Services</h4>

                                    <div className="widget-link">
                                        <ul className="link">
                                            <li><a href="#">Data Security</a></li>
                                            <li><a href="#">IT Managment</a></li>
                                            <li><a href="#">Outsourcing</a></li>
                                            <li><a href="#">Networking</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-3 col-sm-6">

                                <div className="footer-widget">
                                    <h4 className="footer-widget-title">Contact Information</h4>

                                    <div className="widget-info">
                                        <ul>
                                            <li>
                                                <div className="info-icon">
                                                    <i className="flaticon-phone-call"></i>
                                                </div>
                                                <div className="info-text">
                                                    <span><a href="#">+00 000 000 000</a></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="info-icon">
                                                    <i className="far fa-envelope-open"></i>
                                                </div>
                                                <div className="info-text">
                                                    <span><a href="#">info@example.com</a></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="info-icon">
                                                    <i className="flaticon-pin"></i>
                                                </div>
                                                <div className="info-text">
                                                    <span>60 East 65th Street, NY</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


                <div className="footer-copyright-area">
                    <div className="container">
                        <div className="footer-copyright-wrap">
                            <div className="row align-items-center">
                                <div className="col-lg-12">

                                    <div className="copyright-text text-center">
                                        <p>© Copyrights 2023 <b>VitaSoft Solutions</b> All rights reserved. </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

        </>
    );
};

export default Footer;